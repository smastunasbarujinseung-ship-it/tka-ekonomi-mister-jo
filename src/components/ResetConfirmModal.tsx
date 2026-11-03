import React from 'react';
import { AlertTriangle, X, RotateCcw } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirmReset
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-rose-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-rose-50 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/30">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-rose-950 tracking-tight">Konfirmasi Reset Progres</h3>
              <p className="text-xs text-rose-700">Tindakan ini tidak dapat dibatalkan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Batal Reset"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 text-slate-700 text-sm leading-relaxed space-y-3">
          <p>
            Apakah kamu yakin ingin <strong>menghapus seluruh progres belajar</strong> di aplikasi Ekonomi Jenius?
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li>Seluruh jawaban yang telah kamu simpan akan dikosongkan.</li>
            <li>Skor evaluasi dan riwayat pengerjaan 30 soal akan kembali ke nol.</li>
            <li>Pembahasan yang telah dibuka akan terkunci kembali.</li>
          </ul>
          <p className="text-xs text-slate-500 italic">
            *Catatan: Hanya data aplikasi Ekonomi Jenius di perangkat ini yang akan dihapus. Data browser lainnya tetap aman.
          </p>
        </div>

        {/* Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={() => {
              onConfirmReset();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-95 shadow-md shadow-rose-600/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ya, Reset Semua Progres</span>
          </button>
        </div>
      </div>
    </div>
  );
};
