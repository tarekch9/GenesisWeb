import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Allgemeines</h2>
        <p className="mb-4">
          Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und den Zweck der Verarbeitung von personenbezogenen Daten innerhalb unserer Website auf.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Erfassung und Speicherung personenbezogener Daten</h2>
        <p className="mb-4">
          Wir erfassen nur Daten, die für die Bereitstellung unserer Dienste notwendig sind. Dies können sein:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name und Kontaktdaten (z. B. E-Mail-Adresse)</li>
          <li>Nutzungsdaten (z. B. besuchte Seiten, Zugriffszeiten)</li>
          <li>Technische Daten (z. B. IP-Adresse, Browser-Typ)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Zweck der Datenverarbeitung</h2>
        <p className="mb-4">
          Ihre Daten werden verarbeitet, um:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>die Website funktionsfähig zu halten,</li>
          <li>Nutzererfahrungen zu verbessern,</li>
          <li>kommunizieren zu können (z. B. bei Kontaktformularen).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking</h2>
        <p className="mb-4">
          Wir verwenden Cookies, um bestimmte Funktionen zu ermöglichen. Sie können Cookies in Ihren Browser-Einstellungen deaktivieren.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Ihre Rechte</h2>
        <p className="mb-4">
          Sie haben das Recht auf:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Auskunft über Ihre gespeicherten Daten,</li>
          <li>Berichtigung oder Löschung Ihrer Daten,</li>
          <li>Einschränkung der Verarbeitung.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter: <br />
          <a href="mailto:datenschutz@beispiel.de" className="text-blue-600">datenschutz@beispiel.de</a>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-8">
        Stand: {new Date().toLocaleDateString('de-DE')}
      </p>
    </div>
  );
};

export default PrivacyPolicy;