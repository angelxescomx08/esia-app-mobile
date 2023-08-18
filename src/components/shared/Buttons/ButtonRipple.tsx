import { motion } from "framer-motion";
import { type PropsWithChildren, useState, type ComponentProps } from "react";
import useMeasure from "react-use-measure";

type Props = PropsWithChildren &
  Omit<ComponentProps<"button">, "onClick"> & { onClick?: () => void };

export const ButtonRipple = ({ children, className, onClick }: Props) => {
  const [animar, setAnimar] = useState(crypto.randomUUID());

  const [ref, { width }] = useMeasure();

  const handleClick = () => {
    setAnimar(crypto.randomUUID());
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      <motion.div
        className={`absolute inset-0 w-[${
          width * 2
        }px] z-50 aspect-square rounded-full bg-blanco`}
        key={animar}
        initial={false}
        animate={{
          scale: [0, 2],
          opacity: [0.7, 0],
          transition: {
            duration: 0.5,
          },
        }}
      />
      <div>{children}</div>
    </button>
  );
};
