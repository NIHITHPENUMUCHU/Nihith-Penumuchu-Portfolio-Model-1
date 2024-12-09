import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nihith_Penumuchu_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="p-6 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Resume</h1>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
            >
              <Download size={20} />
              Download PDF
            </button>
          </div>
          <div className="p-6">
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px] rounded-lg"
              title="Resume"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}