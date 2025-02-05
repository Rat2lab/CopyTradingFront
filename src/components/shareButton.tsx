import { useState } from 'react';
import { Button } from './ui/button';
import { Share1Icon } from '@radix-ui/react-icons';

export function ShareButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // mostrar el feedback durante 2 segundos
  };

  return (
    <Button variant="default" onClick={handleCopy}>
      <Share1Icon className="mr-2 h-4 w-4" />
      {copied ? (
        <span className="font-bold">Copied!</span>
      ) : (
        'Share this profile'
      )}
    </Button>
  );
}