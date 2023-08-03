import { useState, type PropsWithChildren, type ComponentProps } from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

type CombinedProps = ComponentProps<"div"> & PropsWithChildren<Props>;

export const Collapse = ({ title, children, ...props }: CombinedProps) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(true);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div {...props}>
      <div
        className="flex select-none items-center justify-between bg-azul py-1"
        onClick={toggleOpen}
      >
        <div className="aspect-square w-5"></div>
        <p className="text-center text-sm font-bold text-blanco">{title}</p>
        <motion.img
          className="pointer-events-none mr-5 w-5"
          src={"/assets/imgs/arrow-white.png"}
          alt=""
          animate={{
            rotate: open ? "0deg" : "180deg",
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </div>
      <motion.div
        className="overflow-hidden"
        initial={false}
        animate={{
          height: open ? height + 30 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </div>
  );
};
