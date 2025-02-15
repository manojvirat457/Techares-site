'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/button';
import { Dialog, DialogContent } from '@/src/components/dialog';

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black sm:max-w-md">
        <div className="flex flex-col items-center space-y-4 py-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <CheckCircle className="h-16 w-16 text-green-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              Thank you for contacting us!
            </h2>
            <p className="text-muted-foreground">
              Our team will get back to you as soon as possible.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button onClick={onClose} className="mt-4">
              Close
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
