import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';
import { Award, Download, QrCode, Shield, CheckCircle, ExternalLink } from 'lucide-react';

export function DoctorantAttestation() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-app-text-secondary tracking-wide uppercase">
          Titre et diplomation
        </span>
        <h1 className="font-serif text-h1 text-app-text">Attestation de succès</h1>
        <p className="text-body text-app-text-secondary">
          Document provisoire certifié valant diplôme officiel de Doctorat en attente d'édition du parchemin ministériel.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Certificate preview */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-6 bg-app-surface border-2 border-app-border relative">
            {/* Header of document */}
            <div className="flex items-center justify-between w-full border-b border-app-border pb-4">
              <div className="flex flex-col">
                <span className="font-serif text-h3 text-app-text">République Algérienne Démocratique et Populaire</span>
                <span className="text-caption text-app-text-secondary">
                  Ministère de l'Enseignement Supérieur et de la Recherche Scientifique
                </span>
                <span className="text-caption text-app-text font-medium mt-0.5">
                  Université de Démonstration · Faculté des Sciences
                </span>
              </div>
              <StatusBadge status="clos" label="Document Authentifié" />
            </div>

            {/* Document body */}
            <div className="flex flex-col gap-4 text-center py-6 w-full max-w-xl mx-auto">
              <span className="text-tiny text-app-text-secondary uppercase tracking-widest font-semibold">
                Attestation provisoire de succès
              </span>
              <h2 className="font-serif text-h2 text-app-text">
                Grade de Docteur en Sciences
              </h2>

              <p className="text-body-sm text-app-text-secondary leading-relaxed">
                Le Recteur de l'Université de Démonstration atteste que la candidate :
              </p>

              <div className="py-2">
                <span className="font-serif text-h2 text-app-text font-normal">
                  Mme Amira BENALI
                </span>
                <p className="text-caption text-app-text-secondary mt-1">
                  Née le 14 mai 1998 · Matricule national : 2023-DOC-8941
                </p>
              </div>

              <p className="text-body-sm text-app-text-secondary leading-relaxed">
                A soutenu avec succès sa thèse de Doctorat en date du <strong className="text-app-text">18 novembre 2026</strong> dans la filière <strong className="text-app-text">Informatique</strong>, avec la mention :
              </p>

              <div className="p-3 bg-app-nested rounded-field font-semibold text-app-text">
                Très Honorable avec Félicitations du Jury
              </div>
            </div>

            <hr className="w-full border-0 h-px bg-app-border" />

            {/* Signature & verification code */}
            <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-app-nested rounded-field flex items-center justify-center">
                  <QrCode size={28} className="text-app-text" />
                </div>
                <div className="flex flex-col">
                  <span className="text-tiny text-app-text-secondary">Code de vérification numérique :</span>
                  <span className="font-mono text-caption text-app-text font-medium">
                    DZ-UNIV-2026-DOC-8941-X9B
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="primary" icon={<Download size={16} />}>
                  Télécharger l'attestation PDF
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <Shield size={18} className="text-app-action" />
              <span>Validité administrative</span>
            </div>
            <p className="text-caption text-app-text-secondary leading-relaxed">
              Cette attestation confère l'ensemble des prérogatives attachées au grade de Docteur. Elle peut être vérifiée en ligne à tout moment par les organismes recruteurs ou académiques via le portail d'authentification national.
            </p>
          </Card>

          <Card peach className="gap-3">
            <span className="text-caption font-semibold tracking-wide uppercase text-peach-text">
              Dépôt légal & Archivage
            </span>
            <p className="text-body-sm text-peach-text">
              Le manuscrit final a été archivé au Centre de Recherche sur l'Information Scientifique et Technique (CERIST).
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

