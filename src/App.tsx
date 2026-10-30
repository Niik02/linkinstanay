/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Globe } from 'lucide-react';

const PROFILE_IMAGE_URL = 'https://i.postimg.cc/ryCxXG7c/Design-sem-nome.png';

interface LinkItem {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
  featured?: boolean;
  icon: ReactNode;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.968 0 1.758.459 3.474 1.331 4.988L2 22l5.184-1.36a9.934 9.934 0 0 0 4.843 1.258h.004c5.515 0 9.969-4.453 9.969-9.969A9.908 9.908 0 0 0 19.08 4.92 9.906 9.906 0 0 0 12.031 2Zm0 18.215h-.003a8.266 8.266 0 0 1-4.215-1.154l-.302-.18-3.136.823.837-3.057-.197-.314a8.242 8.242 0 0 1-1.269-4.398c0-4.55 3.702-8.251 8.255-8.251a8.198 8.198 0 0 1 5.839 2.42 8.198 8.198 0 0 1 2.416 5.838c0 4.551-3.703 8.273-8.225 8.273Zm4.527-6.18c-.248-.124-1.468-.725-1.696-.808-.227-.082-.393-.124-.558.124-.165.248-.64.808-.785.973-.145.166-.289.187-.537.063-.248-.124-1.047-.386-1.994-1.23-.737-.658-1.235-1.471-1.38-1.719-.144-.248-.015-.382.109-.506.111-.111.248-.29.372-.434.124-.145.165-.249.248-.414.082-.166.041-.311-.021-.435-.062-.124-.558-1.345-.764-1.842-.201-.484-.406-.418-.558-.426l-.475-.008c-.165 0-.434.062-.661.31-.227.249-.868.849-.868 2.07 0 1.221.889 2.401 1.013 2.567.124.165 1.749 2.671 4.238 3.745.592.256 1.054.409 1.414.523.594.189 1.135.162 1.563.098.477-.071 1.468-.6 1.674-1.18.207-.579.207-1.076.145-1.18-.062-.103-.227-.165-.475-.289Z" />
    </svg>
  );
}

function YouTubeOfficialIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

const LINKS: LinkItem[] = [
  {
    id: 'publicidade',
    label: 'QUERO FAZER UMA PUBLICIDADE',
    href: 'https://wa.me/553181107577',
    ariaLabel: 'Quero fazer uma publicidade pelo WhatsApp (abre em nova aba)',
    featured: true,
    icon: <WhatsAppIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />,
  },
  {
    id: 'youtube',
    label: 'INSCREVA-SE NO YOUTUBE',
    href: 'https://www.youtube.com/@nayemacao',
    ariaLabel: 'Inscreva-se no canal Nay em Ação no YouTube (abre em nova aba)',
    icon: <YouTubeOfficialIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />,
  },
  {
    id: 'site',
    label: 'ACESSE NOSSO SITE',
    href: 'https://nayemacao.vercel.app',
    ariaLabel: 'Acesse o site oficial da Nay em Ação (abre em nova aba)',
    icon: <Globe className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={2.1} aria-hidden="true" />,
  },
];

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <main className="min-h-[100dvh] w-full bg-[#FFFFFF] flex flex-col items-center justify-center px-5 py-5">
      <div className="w-full max-w-[430px] flex flex-col items-center">
        {/* Foto principal centralizada com moldura redonda */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: easeCurve }}
          className="relative p-1 rounded-full border-[2.5px] border-[#00C8FF] ring-4 ring-[#5B2D5C]/[0.06] bg-[#FFFFFF] shadow-[0_12px_30px_-8px_rgba(91,45,92,0.14)]"
        >
          <div className="w-[148px] h-[148px] min-[390px]:w-[164px] min-[390px]:h-[164px] sm:w-[184px] sm:h-[184px] rounded-full overflow-hidden bg-[#FFFFFF] flex items-center justify-center">
            {!imageError ? (
              <img
                src={PROFILE_IMAGE_URL}
                alt="Nay em Ação"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                decoding="async"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center select-none"
              />
            ) : (
              <div
                aria-label="Nay em Ação"
                className="w-full h-full flex items-center justify-center bg-[#5B2D5C]/5 text-[#5B2D5C] font-display font-extrabold text-4xl tracking-tight"
              >
                NAY
              </div>
            )}
          </div>
        </motion.div>

        {/* Nome logo abaixo da foto com pouco espaçamento e detalhe discreto em laranja */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.12, ease: easeCurve }}
          className="mt-3.5 flex flex-col items-center text-center"
        >
          <h1 className="font-display font-extrabold text-[24px] min-[390px]:text-[26px] sm:text-[30px] leading-tight tracking-[0.03em] text-[#5B2D5C]">
            NAY EM AÇÃO
          </h1>
          <span
            aria-hidden="true"
            className="mt-2 block w-8 h-[3px] rounded-full bg-[#F1861C]"
          />
        </motion.div>

        {/* Três botões principais compactos e sequenciais */}
        <nav
          aria-label="Links principais da Nay em Ação"
          className="mt-5 sm:mt-6 w-full flex flex-col gap-2.5 sm:gap-3"
        >
          {LINKS.map((item, index) => {
            const isFeatured = Boolean(item.featured);

            return (
              <motion.a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.38,
                  delay: shouldReduceMotion ? 0 : 0.2 + index * 0.08,
                  ease: easeCurve,
                }}
                className={[
                  'group relative w-full rounded-2xl px-3.5 sm:px-4 flex items-center justify-between gap-2.5',
                  'transition-[transform,box-shadow,border-color,background-color] duration-150 ease-out',
                  'motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.985]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                  isFeatured
                    ? 'min-h-[56px] sm:min-h-[62px] bg-[#00C8FF] text-[#5B2D5C] border border-[#00C8FF] shadow-[0_10px_26px_-6px_rgba(0,200,255,0.48)] hover:shadow-[0_14px_30px_-6px_rgba(0,200,255,0.62)]'
                    : 'min-h-[52px] sm:min-h-[58px] bg-[#FFFFFF] text-[#5B2D5C] border border-[#5B2D5C]/18 shadow-[0_4px_16px_-4px_rgba(91,45,92,0.08)] hover:border-[#00C8FF] hover:shadow-[0_10px_24px_-6px_rgba(0,200,255,0.22)]',
                ].join(' ')}
              >
                {/* Ícone à esquerda */}
                <span
                  className={[
                    'w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-150 motion-safe:group-hover:scale-105',
                    isFeatured
                      ? 'bg-[#FFFFFF] text-[#5B2D5C] shadow-xs'
                      : 'bg-[#5B2D5C]/[0.07] text-[#5B2D5C] group-hover:bg-[#00C8FF]/15',
                  ].join(' ')}
                >
                  {item.icon}
                </span>

                {/* Rótulo centralizado em linha única */}
                <span className="flex-1 text-center font-display font-bold text-[12.5px] min-[380px]:text-[13.5px] sm:text-[15px] tracking-[0.025em] whitespace-nowrap truncate">
                  {item.label}
                </span>

                {/* Indicador discreto de abertura à direita com detalhe laranja */}
                <span
                  aria-hidden="true"
                  className={[
                    'w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-150 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5',
                    isFeatured
                      ? 'text-[#5B2D5C]/80 group-hover:text-[#5B2D5C]'
                      : 'text-[#5B2D5C]/45 group-hover:text-[#F1861C]',
                  ].join(' ')}
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                </span>
              </motion.a>
            );
          })}
        </nav>
      </div>
    </main>
  );
}
