import { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, ShieldAlert, Download, Lock, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';

interface ManuscritVersion {
  version: string;
  nomFichier: string;
  taille: string;
  pages: number;
  dateDepot: string;
  sha256: string;
  statut: 'valide' | 'propose';
  embargo: string;
}

const versionsHistory: ManuscritVersion[] = [
  {
    version: 'v2 (Actuelle)',
    nomFichier: 'these_amira_benali_final_v2.pdf',
    taille: '14.2 Mo',
    pages: 184,
    dateDepot: '28 octobre 2026 à 11:34',
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    statut: 'valide',
    embargo: 'Aucun embargo (Diffusion ouverte)',
  },
  {
    version: 'v1',
    nomFichier: 'these_amira_benali_preliminaire_v1.pdf',
    taille: '12.8 Mo',
    pages: 172,
    dateDepot: '12 septembre 2026 à 16:20',
    sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    statut: 'propose',
    embargo: 'Aucun',
  },
];

export function DoctorantManuscrit() {
  const [selectedEmbargo, setSelectedEmbargo] = useState('aucun');

  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Dépôt des documents
        </span>
        <h1 className="font-serif text-h1 text-app-text">Dépôt du manuscrit</h1>
        <p className="text-body text-app-text-secondary">
          Téléversez votre manuscrit de thèse au format PDF pour instruction et transmission aux experts.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Upload box */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-6">
            <h2 className="text-title text-app-text">Déposer une nouvelle version du manuscrit</h2>

            {/* Drop zone */}
            <div className="w-full flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed border-app-border rounded-card hover:border-app-action/50 bg-app-nested/30 transition-colors cursor-pointer">
              <div className="flex w-14 h-14 items-center justify-center bg-app-surface rounded-full shadow-sm">
                <UploadCloud size={28} className="text-app-action" />
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-label text-app-text">
                  Glissez-déposez votre fichier PDF ici, ou <span className="text-app-link">parcourez votre disque</span>
                </span>
                <span className="text-caption text-app-text-secondary">
                  Format PDF uniquement · Taille max 50 Mo · Doit être non protégé par mot de passe
                </span>
              </div>
            </div>

            {/* Pre-upload checklist & options */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-label text-app-text">Contrôles automatiques appliqués au dépôt :</span>
              <div className="grid grid-cols-2 gap-3 text-caption text-app-text-secondary max-sm:grid-cols-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-status-soutenu-text" />
                  <span>Vérification du format MIME réel (application/pdf)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-status-soutenu-text" />
                  <span>Calcul d'empreinte cryptographique SHA-256</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-status-soutenu-text" />
                  <span>Comptage et validation du nombre de pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-status-soutenu-text" />
                  <span>Vérification de l'absence de verrouillage</span>
                </div>
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            {/* Embargo setting */}
            <div className="flex flex-col gap-3 w-full">
              <span className="text-label text-app-text">Période d'embargo (Confidentialité)</span>
              <p className="text-caption text-app-text-secondary">
                Si vos travaux comportent des aspects soumis à brevet ou clause industrielle, vous pouvez demander un embargo temporaire de diffusion publique.
              </p>
              <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                {[
                  { id: 'aucun', label: 'Aucun embargo', sub: 'Diffusion immédiate après soutenance' },
                  { id: '1an', label: '1 an d’embargo', sub: 'Réservé aux membres autorisés' },
                  { id: '2ans', label: '2 ans d’embargo', sub: 'Accord du conseil requis' },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex flex-col p-3 rounded-field border cursor-pointer transition-colors ${
                      selectedEmbargo === opt.id
                        ? 'border-app-action bg-app-nested'
                        : 'border-app-border bg-app-surface hover:bg-app-nested/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-medium text-app-text">{opt.label}</span>
                      <input
                        type="radio"
                        name="embargo"
                        value={opt.id}
                        checked={selectedEmbargo === opt.id}
                        onChange={(e) => setSelectedEmbargo(e.target.value)}
                        className="sr-only"
                      />
                      <span
                        className={`w-3.5 h-3.5 rounded-full border ${
                          selectedEmbargo === opt.id ? 'border-app-action bg-app-action' : 'border-app-border'
                        }`}
                      />
                    </div>
                    <span className="text-tiny text-app-text-secondary mt-1">{opt.sub}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button disabled className="self-end">
              Confirmer et téléverser le document
            </Button>
          </Card>

          {/* Versions history */}
          <Card className="gap-5">
            <h2 className="text-title text-app-text">Historique des versions déposées</h2>

            <div className="flex flex-col gap-4 w-full divide-y divide-app-border">
              {versionsHistory.map((item) => (
                <div key={item.version} className="flex flex-col gap-3 pt-4 first:pt-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex w-10 h-10 items-center justify-center bg-app-nested rounded-field shrink-0">
                        <FileText size={20} className="text-app-text" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-label text-app-text">{item.nomFichier}</span>
                          <span className="text-badge px-2 py-0.5 rounded-pill bg-app-nested text-app-text">
                            {item.version}
                          </span>
                        </div>
                        <span className="text-caption text-app-text-secondary">
                          {item.taille} · {item.pages} pages · Déposé le {item.dateDepot}
                        </span>
                      </div>
                    </div>
                    <StatusBadge status={item.statut} label={item.statut === 'valide' ? 'Validé par jury' : 'Archivé'} />
                  </div>

                  <div className="flex items-center justify-between text-caption bg-app-nested/60 p-3 rounded-field">
                    <div className="flex items-center gap-2 truncate max-w-md">
                      <span className="font-mono text-tiny text-app-text-secondary truncate">
                        SHA-256 : {item.sha256}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" icon={<Download size={14} />}>
                      Télécharger (Lien sécurisé)
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Security & storage info */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <Lock size={18} className="text-app-action" />
              <span>Stockage sécurisé</span>
            </div>
            <p className="text-caption text-app-text-secondary leading-relaxed">
              Tous les manuscrits sont stockés sur un compartiment de stockage privé chiffré. L'accès est strictement réservé au doctorant, à son directeur et aux membres accrédités du jury via des signatures numériques temporaires d'une durée de validité de 60 secondes.
            </p>
          </Card>

          <Card peach className="gap-3">
            <span className="text-caption font-semibold tracking-wide uppercase text-peach-text">
              Note importante
            </span>
            <p className="text-body-sm text-peach-text">
              Une fois le jury convoqué, aucune modification du manuscrit ne peut intervenir sans l'autorisation expresse du président de séance.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

