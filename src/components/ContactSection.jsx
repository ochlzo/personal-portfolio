import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  X,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      e.target.reset(); // Reset form
      setOpen(true); // Show toast
    }, 1500);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary ">Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-8">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left w-full">
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:johnbenedictkandelarya@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      johnbenedictkandelarya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left w-full">
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+639770375772"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +63 9770375772
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left w-full">
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      P2, Maguiron, Guinobatan, Albay, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.facebook.com/johnbenedict.candelaria"
                    target="_blank"
                  >
                    <Facebook className="hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.instagram.com/ochlzo/" target="_blank">
                    <Instagram className="hover:text-primary transition-colors" />
                  </a>
                  <a href="https://x.com/NEWT_42" target="_blank">
                    <X className="hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Cholo Candelaria..."
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="example@gmail.com..."
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I want to reach out..."
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Message */}
      <Toast.Root
        className="bg-card border border-border px-4 py-3 rounded-md shadow-lg text-sm text-foreground relative"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="font-semibold mb-1">Message Sent</Toast.Title>
        <Toast.Description>
          Thank you for sending a message! I'll get back to you soon...
        </Toast.Description>

        {/* Close button in the top-right */}
        <Toast.Close
          className="absolute top-2 right-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Close"
        >
          ×
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100%-2rem)]" />
    </Toast.Provider>
  );
};
