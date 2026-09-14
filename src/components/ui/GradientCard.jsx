import * as React from "react";
import { cva } from "class-variance-authority";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "../../lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-[var(--radius-xl)] p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg border border-[var(--border-card)]",
  {
    variants: {
      gradient: {
        red: "bg-gradient-to-br from-red-50 to-rose-100/50 dark:from-[rgba(225,29,46,0.1)] dark:to-[rgba(225,29,46,0.02)]",
        gray: "bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-[rgba(255,255,255,0.03)] dark:to-[rgba(255,255,255,0.01)]",
        darkred: "bg-gradient-to-br from-rose-50 to-red-100/50 dark:from-[rgba(225,29,46,0.15)] dark:to-[rgba(225,29,46,0.05)]",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
);

const GradientCard = React.forwardRef(
  ({ className, gradient, badgeText, badgeColor, title, description, ctaText, ctaHref, imageUrl, ...props }, ref) => {
    
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.02, y: -4 },
    };

    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
        ref={ref}
      >
        <div
          className={cn(cardVariants({ gradient }), className)}
          {...props}
        >
          {/* Decorative background image with animation */}
          <motion.img
            src={imageUrl}
            alt={`${title} background graphic`}
            variants={imageAnimation}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute -right-1/4 -bottom-1/4 w-3/4 opacity-40 pointer-events-none dark:opacity-20 object-contain mix-blend-overlay"
          />

          {/* Card Content */}
          <div className="z-10 flex flex-col h-full relative">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/70 dark:bg-black/40 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur-md w-fit shadow-sm border border-black/5 dark:border-white/10">
              <span 
                className="h-2 w-2 rounded-full" 
                style={{ backgroundColor: badgeColor }}
              />
              <span className="dark:text-white text-slate-800">{badgeText}</span>
            </div>

            {/* Title and Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 dark:text-white text-slate-900">{title}</h3>
              <p className="max-w-xs dark:text-gray-300 text-slate-700 leading-relaxed text-sm md:text-base">{description}</p>
            </div>
            
            {/* Call to Action Link */}
            <a
              href={ctaHref}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold dark:text-white text-slate-900"
            >
              {ctaText}
              <ArrowRight weight="bold" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
