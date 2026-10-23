import { useEffect, useState } from "react";

/**
 * Toast notifications.
 * Fire one from anywhere with:  showToast("Message sent", "success")
 * Render <Toaster /> once (already done in App.jsx).
 */
export function showToast(message, kind = "success") {
  window.dispatchEvent(
    new CustomEvent("va-toast", { detail: { message, kind } })
  );
}

export function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function onToast(e) {
      const id = Date.now() + Math.random();
      const toast = { id, message: e.detail.message, kind: e.detail.kind || "success" };
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4500);
    }
    window.addEventListener("va-toast", onToast);
    return () => window.removeEventListener("va-toast", onToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 items-end">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={`max-w-sm px-5 py-4 text-[13.5px] font-medium text-white shadow-xl ${
            t.kind === "error" ? "bg-red-700" : "bg-abus-900"
          }`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
