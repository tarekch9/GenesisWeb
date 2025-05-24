'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Wird gesendet...');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('https://formsubmit.co/ajax/chaanita@proton.me', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (res.ok) {
        setStatus('Nachricht erfolgreich gesendet!');
        e.currentTarget.reset();
      } else {
        setStatus('Fehler beim Senden.');
      }
    } catch (error) {
      setStatus('Es ist ein Fehler aufgetreten.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Dein Name" required className="block border p-2" />
      <input type="email" name="email" placeholder="Deine E-Mail" required className="block border p-2" />
      <textarea name="message" placeholder="Nachricht" required className="block border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Senden</button>
      <p>{status}</p>
    </form>
  );
}
