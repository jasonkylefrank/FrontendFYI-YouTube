"use client";

import { usePathname } from "next/navigation";
import classNames from "classnames";
// import { motion } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    // Right now in Next.js v13, the exit animations for page transitions don't work correctly if we use an
    //  instance of this component in the layout file, even if we use AnimatePresence in this file.  If we 
    //  do use AnimatePresence in this file and use an instance of this component in the layout file, then
    //  the new route's content is first cut to and then the exit animation is run on that new route's content
    //  and then the entry animation also runs on the new route's content (clearly not what we want).
    //
    // That said, the Next.js v13 docs state that the new template.tsx is actually the shared-layout-like
    //  construct that is meant for abstracting this functionality to a single file (rather than layout.tsx). 
    //  They state that the template.tsx file is a more-suitable option when you need enter/exit animations.
    //  So that's another approach that I need to try-out.
    //  See: https://beta.nextjs.org/docs/routing/pages-and-layouts#templates
    // 
    // <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // <-- Since pathname will change with each new route, this makes this element unmount / mount on each route change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={classNames("min-h-screenHeightWithoutHeader", className)}
      >
        {children}
      </motion.div>
    // </AnimatePresence>
  );
} 
