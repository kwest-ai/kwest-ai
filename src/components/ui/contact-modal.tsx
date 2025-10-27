"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Valid email is required');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Use Resend's REST API directly from client
      const resendApiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
      
      if (!resendApiKey) {
        throw new Error('Resend API key is not configured');
      }

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'kaushik.kumar@kwest-ai.com',
          replyTo: formData.email,
          subject: `New Contact Form Submission from ${formData.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 8px;">
              <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="color: #1f2937; margin-top: 0;">New Contact Form Submission</h2>
                
                <div style="border-left: 4px solid #4f46e5; padding-left: 16px; margin: 20px 0;">
                  <p style="margin: 12px 0;"><strong style="color: #1f2937;">Name:</strong><br/><span style="color: #4b5563;">${formData.name}</span></p>
                  <p style="margin: 12px 0;"><strong style="color: #1f2937;">Email:</strong><br/><a href="mailto:${formData.email}" style="color: #4f46e5; text-decoration: none;">${formData.email}</a></p>
                  <p style="margin: 12px 0;"><strong style="color: #1f2937;">Phone:</strong><br/><span style="color: #4b5563;">${formData.phone}</span></p>
                  <p style="margin: 12px 0;"><strong style="color: #1f2937;">Message:</strong></p>
                  <div style="background-color: #f3f4f6; padding: 12px; border-radius: 4px; color: #4b5563; white-space: pre-wrap; word-wrap: break-word;">
                    ${formData.message}
                  </div>
                </div>
                
                <p style="color: #6b7280; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
                  This email was sent from the KwestAI landing page contact form.
                </p>
              </div>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to send message');
      }

      // Send confirmation email to user
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KwestAI <onboarding@resend.dev>',
          to: formData.email,
          subject: 'We received your message - KwestAI',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 8px;">
              <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="color: #1f2937; margin-top: 0;">Thank you for reaching out!</h2>
                <p style="color: #4b5563; line-height: 1.6;">Hi ${formData.name},</p>
                
                <p style="color: #4b5563; line-height: 1.6;">
                  We've received your message and will get back to you as soon as possible. Our team typically responds within 24 hours during business days.
                </p>
                
                <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #10b981;">
                  <p style="margin: 0 0 8px 0; color: #059669; font-weight: bold;">Your message:</p>
                  <p style="margin: 0; color: #4b5563; white-space: pre-wrap; word-wrap: break-word;">${formData.message}</p>
                </div>
                
                <p style="color: #4b5563; line-height: 1.6;">
                  If you have any urgent matters, feel free to reach out directly at our office.
                </p>
                
                <p style="color: #4b5563; line-height: 1.6; margin-top: 25px;">
                  Best regards,<br/>
                  <strong>The KwestAI Team</strong>
                </p>
                
                <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px; margin-bottom: 0;">
                  © 2025 KwestAI. All rights reserved.
                </p>
              </div>
            </div>
          `,
        }),
      }).catch(err => console.error('Confirmation email failed:', err));

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Talk to us</h2>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Message sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
