"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";

// --- Context ---
interface ConsultModalContextValue {
  open: () => void;
}
const ConsultModalContext = createContext<ConsultModalContextValue | undefined>(undefined);

export function useConsultModal() {
  const ctx = useContext(ConsultModalContext);
  if (!ctx) throw new Error("useConsultModal must be used within ConsultModalProvider");
  return ctx;
}

// --- Provider + Modal ---
export function ConsultModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <ConsultModalContext.Provider value={{ open }}>
      {children}
      {isOpen && <ConsultForm onClose={close} />}
    </ConsultModalContext.Provider>
  );
}

// --- Form ---
const industries = ["부동산/건설", "병원/의료", "교육", "쇼핑몰", "서비스업", "기타"];
const budgets = ["100만원 미만", "100-300만원", "300-500만원", "500만원 이상", "미정"];

function ConsultForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    industry: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 폼 제출 로직
    alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* 폼 컨테이너 */}
      <div
        className="relative w-full max-w-md rounded-2xl border border-neutral-700 bg-[#111] p-8 shadow-2xl font-['Paperlogy']"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors text-2xl leading-none"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold text-white mb-1">무료 상담 신청</h3>
        <p className="text-neutral-400 text-sm mb-6">
          아래 정보를 남겨주시면 빠르게 연락드리겠습니다.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* 이름 */}
          <div className="input-field relative">
            <input
              required
              autoComplete="off"
              type="text"
              name="name"
              id="consult-name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-700 bg-transparent px-4 py-3 text-white text-base outline-none transition-colors focus:border-[#ec622d] peer"
            />
            <label
              htmlFor="consult-name"
              className="pointer-events-none absolute left-4 top-3 text-neutral-500 transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:scale-[0.8] peer-focus:bg-[#111] peer-focus:px-1.5 peer-focus:text-[#ec622d] peer-focus:font-bold peer-valid:-top-2.5 peer-valid:left-3 peer-valid:scale-[0.8] peer-valid:bg-[#111] peer-valid:px-1.5 peer-valid:text-[#ec622d] peer-valid:font-bold"
            >
              이름 *
            </label>
          </div>

          {/* 연락처 */}
          <div className="input-field relative">
            <input
              required
              autoComplete="off"
              type="tel"
              name="phone"
              id="consult-phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-700 bg-transparent px-4 py-3 text-white text-base outline-none transition-colors focus:border-[#ec622d] peer"
            />
            <label
              htmlFor="consult-phone"
              className="pointer-events-none absolute left-4 top-3 text-neutral-500 transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:scale-[0.8] peer-focus:bg-[#111] peer-focus:px-1.5 peer-focus:text-[#ec622d] peer-focus:font-bold peer-valid:-top-2.5 peer-valid:left-3 peer-valid:scale-[0.8] peer-valid:bg-[#111] peer-valid:px-1.5 peer-valid:text-[#ec622d] peer-valid:font-bold"
            >
              연락처 *
            </label>
          </div>

          {/* 업종 */}
          <div className="relative">
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-neutral-700 bg-transparent px-4 py-3 text-white text-base outline-none transition-colors focus:border-[#ec622d] cursor-pointer"
            >
              <option value="" disabled className="bg-[#111] text-neutral-500">
                업종 선택
              </option>
              {industries.map((item) => (
                <option key={item} value={item} className="bg-[#111] text-white">
                  {item}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-3.5 text-neutral-500">
              ▾
            </span>
          </div>

          {/* 월 광고 예산 */}
          <div className="relative">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-neutral-700 bg-transparent px-4 py-3 text-white text-base outline-none transition-colors focus:border-[#ec622d] cursor-pointer"
            >
              <option value="" disabled className="bg-[#111] text-neutral-500">
                월 광고 예산
              </option>
              {budgets.map((item) => (
                <option key={item} value={item} className="bg-[#111] text-white">
                  {item}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-3.5 text-neutral-500">
              ▾
            </span>
          </div>

          {/* 문의사항 */}
          <div className="input-field relative">
            <textarea
              name="message"
              id="consult-message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-700 bg-transparent px-4 py-3 text-white text-base outline-none transition-colors focus:border-[#ec622d] resize-none peer"
              placeholder=" "
            />
            <label
              htmlFor="consult-message"
              className="pointer-events-none absolute left-4 top-3 text-neutral-500 transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:scale-[0.8] peer-focus:bg-[#111] peer-focus:px-1.5 peer-focus:text-[#ec622d] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:scale-[0.8] peer-[:not(:placeholder-shown)]:bg-[#111] peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-[#ec622d] peer-[:not(:placeholder-shown)]:font-bold"
            >
              문의사항 (선택)
            </label>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#ec622d] py-3.5 text-white font-bold text-lg tracking-wider uppercase transition-all duration-200 hover:bg-[#d55526] active:scale-[0.995] shadow-lg"
          >
            상담 신청하기
          </button>
        </form>
      </div>
    </div>
  );
}
