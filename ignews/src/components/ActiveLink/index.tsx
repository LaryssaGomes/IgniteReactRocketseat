import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}
export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkkProps) {
  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClassName : "";
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
