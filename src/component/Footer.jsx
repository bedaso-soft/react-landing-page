import { Facebook, Instagram, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 px-8 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
            <span className="text-indigo-500 text-3xl">≈</span>
            DevFlow
          </div>

          <p className="text-sm leading-relaxed mb-6">
            Building modern digital experiences with elegant design and
            scalable solutions for developers and businesses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-500">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
            <Github className="w-5 h-5 cursor-pointer hover:text-white" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Marketing</li>
            <li className="hover:text-white cursor-pointer">Analytics</li>
            <li className="hover:text-white cursor-pointer">Automation</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Guides</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-slate-800 mt-12 pt-6 text-sm text-center">
        © 2026 DevFlow Inc. All rights reserved.
      </div>
    </footer>
  );
}