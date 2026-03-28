/**
 * Dynamic Component Imports
 * تحميل المكونات الثقيلة بشكل ديناميكي لتحسين الأداء
 * 
 * ملاحظة: هذا الملف يحتوي على تعريفات للمكونات التي سيتم إنشاؤها مستقبلاً
 * يمكن استخدامها عند الحاجة بدون الحاجة لتعديل الكود
 */

import dynamic from 'next/dynamic';
import { GridSkeleton, DetailPageSkeleton, TableSkeleton } from './LoadingSkeleton';

// ─── Helper للتعامل مع المكونات غير الموجودة ───
const createFallback = (name: string) => {
  return () => (
    <div className="w-full p-8 bg-white/5 rounded-lg text-center">
      <p className="text-white/70">المكون {name} غير متاح حالياً</p>
    </div>
  );
};

// ─── Admin Components (Heavy) ───
// يتم تحميلها فقط عند الحاجة لتقليل حجم Bundle
export const AdminDashboard = dynamic(
  () => import('./admin/AdminDashboard').catch(() => ({ default: createFallback('لوحة التحكم') })),
  {
    ssr: false,
    loading: () => <TableSkeleton rows={10} />,
  }
);

export const AdminCarManager = dynamic(
  () => import('./admin/AdminCarManager').catch(() => ({ default: createFallback('إدارة السيارات') })),
  {
    ssr: false,
    loading: () => <GridSkeleton count={6} type="car" />,
  }
);

export const AdminPartManager = dynamic(
  () => import('./admin/AdminPartManager').catch(() => ({ default: createFallback('إدارة القطع') })),
  {
    ssr: false,
    loading: () => <GridSkeleton count={6} type="part" />,
  }
);

// ─── 3D/Heavy Graphics Components ───
export const ThreeScene = dynamic(
  () => import('./ThreeScene').catch(() => ({ default: createFallback('المشهد ثلاثي الأبعاد') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-white/5 rounded-2xl animate-pulse flex items-center justify-center">
        <p className="text-white/50">جاري تحميل المشهد ثلاثي الأبعاد...</p>
      </div>
    ),
  }
);

export const Car360Viewer = dynamic(
  () => import('./Car360Viewer').catch(() => ({ default: createFallback('عارض 360') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-white/5 rounded-2xl animate-pulse" />
    ),
  }
);

// ─── Chart Components ───
export const AnalyticsChart = dynamic(
  () => import('./charts/AnalyticsChart').catch(() => ({ default: createFallback('الرسم البياني') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-64 bg-white/5 rounded-2xl animate-pulse" />
    ),
  }
);

export const RevenueChart = dynamic(
  () => import('./charts/RevenueChart').catch(() => ({ default: createFallback('رسم الإيرادات') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-64 bg-white/5 rounded-2xl animate-pulse" />
    ),
  }
);

// ─── Rich Text Editor ───
export const RichTextEditor = dynamic(
  () => import('./RichTextEditor').catch(() => ({ 
    default: () => <textarea className="w-full p-4 rounded-lg bg-white/5 text-white" placeholder="محرر النصوص غير متاح" /> 
  })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-48 bg-white/5 rounded-lg animate-pulse" />
    ),
  }
);

// ─── PDF Viewer ───
export const PDFViewer = dynamic(
  () => import('./PDFViewer').catch(() => ({ default: createFallback('عارض PDF') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-white/5 rounded-lg animate-pulse" />
    ),
  }
);

// ─── Video Player ───
export const VideoPlayer = dynamic(
  () => import('./VideoPlayer').catch(() => ({ 
    default: () => <video controls className="w-full rounded-lg bg-black" /> 
  })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-white/5 rounded-lg animate-pulse" />
    ),
  }
);

// ─── Map Components ───
export const LocationMap = dynamic(
  () => import('./LocationMap').catch(() => ({ default: createFallback('الخريطة') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-white/5 rounded-lg animate-pulse flex items-center justify-center">
        <p className="text-white/50">جاري تحميل الخريطة...</p>
      </div>
    ),
  }
);

// ─── Chat Components ───
export const LiveChat = dynamic(
  () => import('./LiveChat').catch(() => ({ default: createFallback('الدردشة المباشرة') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-white/5 rounded-lg animate-pulse" />
    ),
  }
);

// ─── Calendar Components ───
export const AuctionCalendar = dynamic(
  () => import('./AuctionCalendar').catch(() => ({ default: createFallback('تقويم المزادات') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-white/5 rounded-lg animate-pulse" />
    ),
  }
);

// ─── Image Gallery ───
export const ImageGallery = dynamic(
  () => import('./ImageGallery').catch(() => ({ default: createFallback('معرض الصور') })),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-white/5 rounded-lg animate-pulse" />
        ))}
      </div>
    ),
  }
);

// ─── QR Code Generator ───
export const QRCodeGenerator = dynamic(
  () => import('./QRCodeGenerator').catch(() => ({ default: createFallback('مولد QR') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-48 h-48 bg-white/5 rounded-lg animate-pulse mx-auto" />
    ),
  }
);

// ─── Barcode Scanner ───
export const BarcodeScanner = dynamic(
  () => import('./BarcodeScanner').catch(() => ({ default: createFallback('ماسح الباركود') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-white/5 rounded-lg animate-pulse" />
    ),
  }
);

// ─── Export Utilities ───
export const ExportToExcel = dynamic(
  () => import('./ExportToExcel').catch(() => ({ 
    default: () => <button disabled className="px-4 py-2 bg-white/10 rounded-lg text-white/50">تصدير Excel</button> 
  })),
  {
    ssr: false,
  }
);

export const ExportToPDF = dynamic(
  () => import('./ExportToPDF').catch(() => ({ 
    default: () => <button disabled className="px-4 py-2 bg-white/10 rounded-lg text-white/50">تصدير PDF</button> 
  })),
  {
    ssr: false,
  }
);

// ─── Social Share ───
export const SocialShare = dynamic(
  () => import('./SocialShare').catch(() => ({ default: createFallback('المشاركة الاجتماعية') })),
  {
    ssr: false,
  }
);

// ─── Payment Components ───
export const PaymentForm = dynamic(
  () => import('./PaymentForm').catch(() => ({ default: createFallback('نموذج الدفع') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 bg-white/5 rounded-lg animate-pulse" />
        ))}
      </div>
    ),
  }
);

// ─── Notification Components ───
export const NotificationCenter = dynamic(
  () => import('./NotificationCenter').catch(() => ({ default: createFallback('مركز الإشعارات') })),
  {
    ssr: false,
    loading: () => (
      <div className="w-80 h-96 bg-white/5 rounded-lg animate-pulse" />
    ),
  }
);
