"use client";

import Link, { type LinkProps } from "next/link";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from "react";

type CTAButtonBase = {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

type CTAButtonLinkProps = CTAButtonBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> &
  Pick<LinkProps, "prefetch" | "replace" | "scroll" | "shallow"> & {
    href: LinkProps["href"];
  };

type CTAButtonButtonProps = CTAButtonBase &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type CTAButtonProps = CTAButtonLinkProps | CTAButtonButtonProps;

const sizeStyles: Record<NonNullable<CTAButtonBase["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight text-white transition-all duration-200 " +
  "bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 shadow-[0_18px_36px_rgba(236,72,153,0.45)] " +
  "hover:shadow-[0_22px_40px_rgba(236,72,153,0.55)] hover:from-rose-400 hover:via-pink-400 hover:to-fuchsia-400 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200";

function buildClassName(size: CTAButtonProps["size"], className?: string) {
  const sizeClass = size ? sizeStyles[size] : sizeStyles.md;
  return [baseClasses, sizeClass, className].filter(Boolean).join(" ");
}

export default function CTAButton(props: CTAButtonProps) {
  const { label, size = "md", className } = props;
  const composedClassName = buildClassName(size, className);

  if ("href" in props && props.href) {
    const {
      href,
      label: _label,
      size: _size,
      className: _className,
      prefetch,
      replace,
      scroll,
      shallow,
      ...anchorProps
    } = props;
    void _label;
    void _size;
    void _className;

    return (
      <Link
        href={href}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        className={composedClassName}
        {...anchorProps}
      >
        {label}
      </Link>
    );
  }

  const {
    label: _label,
    size: _size,
    className: _className,
    ...buttonProps
  } = props;
  void _label;
  void _size;
  void _className;

  return (
    <button type="button" className={composedClassName} {...buttonProps}>
      {label}
    </button>
  );
}
