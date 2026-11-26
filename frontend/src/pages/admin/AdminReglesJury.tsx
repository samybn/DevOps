import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Scale, CheckCircle2, History, Plus } from 'lucide-react';

export function AdminReglesJury() {
  const [minMembres, setMinMembres] = useState(4);
  const [maxMembres, setMaxMembres] = useState(8);
  const [nbRapporteurs, setNbRapporteurs] = useState(2);
  const [hdrObligatoire, setHdrObligatoire] = useState(true);
  const [partMinExterne, setPartMinExterne] = useState(40);
  const [equilibreGenre, setEquilibreGenre] = useState(false);

  return (
    <>
      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Gouvernance réglementaire
          </span>
          <h1 className="font-serif text-h1 text-app-text">Paramétrage des règles de jury</h1>
          <p className="text-body text-app-text-secondary">
            Définissez les contraintes d'éligibilité appliquées lors de la composition des commissions de soutenance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-badge px-3 py-1 rounded-pill bg-status-valide-bg text-status-valide-text">
            Version active : v2.4 (2026)
          </span>
          <Button variant="primary" size="sm" icon={<Plus size={14} />}>
            Publier une nouvelle version
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {/* Rules form */}
        <div className="col-span-2 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="gap-6">
            <h2 className="text-title text-app-text">Critères d'éligibilité configurables</h2>

            <div className="flex flex-col gap-5 w-full text-body-sm">
              {/* Taille jury */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-app-border">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">Taille minimale du jury</span>
                  <span className="text-caption text-app-text-secondary">Nombre minimal de membres votants</span>
                </div>
                <input
                  type="number"
                  value={minMembres}
                  onChange={(e) => setMinMembres(Number(e.target.value))}
                  className="p-2.5 rounded-field border border-app-border bg-app-surface text-app-text w-24 text-center outline-none focus:border-app-action"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-app-border">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">Taille maximale du jury</span>
                  <span className="text-caption text-app-text-secondary">Limite haute autorisée par arrêté</span>
                </div>
                <input
                  type="number"
                  value={maxMembres}
                  onChange={(e) => setMaxMembres(Number(e.target.value))}
                  className="p-2.5 rounded-field border border-app-border bg-app-surface text-app-text w-24 text-center outline-none focus:border-app-action"
                />
              </div>

              {/* Rapporteurs */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-app-border">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">Nombre de rapporteurs exigés</span>
                  <span className="text-caption text-app-text-secondary">Experts extérieurs chargés des rapports préalables</span>
                </div>
                <input
                  type="number"
                  value={nbRapporteurs}
                  onChange={(e) => setNbRapporteurs(Number(e.target.value))}
                  className="p-2.5 rounded-field border border-app-border bg-app-surface text-app-text w-24 text-center outline-none focus:border-app-action"
                />
              </div>

              {/* HDR pour rapporteurs */}
              <div className="flex items-center justify-between pb-4 border-b border-app-border">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">HDR obligatoire pour les rapporteurs</span>
                  <span className="text-caption text-app-text-secondary">Habilitation à Diriger des Recherches ou grade de Professeur</span>
                </div>
                <input
                  type="checkbox"
                  checked={hdrObligatoire}
                  onChange={(e) => setHdrObligatoire(e.target.checked)}
                  className="w-5 h-5 accent-app-action cursor-pointer"
                />
              </div>

              {/* Part minimale externe */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-app-border">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">Part minimale de membres externes (%)</span>
                  <span className="text-caption text-app-text-secondary">Rapport membres extérieurs / effectif total</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={partMinExterne}
                    onChange={(e) => setPartMinExterne(Number(e.target.value))}
                    className="p-2.5 rounded-field border border-app-border bg-app-surface text-app-text w-24 text-center outline-none focus:border-app-action"
                  />
                  <span className="text-app-text-secondary">%</span>
                </div>
              </div>

              {/* Equilibre de genre */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">Vérification de mixité femmes / hommes</span>
                  <span className="text-caption text-app-text-secondary">Indicateur d'équilibre non bloquant</span>
                </div>
                <input
                  type="checkbox"
                  checked={equilibreGenre}
                  onChange={(e) => setEquilibreGenre(e.target.checked)}
                  className="w-5 h-5 accent-app-action cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-end w-full pt-4 border-t border-app-border">
              <Button variant="primary">
                Sauvegarder les modifications
              </Button>
            </div>
          </Card>
        </div>

        {/* Versions history */}
        <div className="flex flex-col gap-6">
          <Card className="gap-3">
            <div className="flex items-center gap-2 text-label text-app-text">
              <History size={18} className="text-app-action" />
              <span>Historique des versions</span>
            </div>
            <div className="flex flex-col gap-2.5 text-caption text-app-text-secondary">
              <div className="flex items-center justify-between p-2.5 bg-app-nested rounded-field">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">Version 2.4 (Active)</span>
                  <span className="text-tiny">Promulguée le 01 sept. 2026</span>
                </div>
                <span className="text-tiny text-status-soutenu-text font-semibold">En vigueur</span>
              </div>
              <div className="flex items-center justify-between p-2.5 hover:bg-app-nested rounded-field transition-colors">
                <div className="flex flex-col">
                  <span className="font-medium text-app-text">Version 2.3</span>
                  <span className="text-tiny">Sept. 2024 – Août 2026</span>
                </div>
                <span className="text-tiny text-app-text-secondary">Archivée</span>
              </div>
            </div>
          </Card>

          <Card peach className="gap-3">
            <span className="text-caption font-semibold tracking-wide uppercase text-peach-text">
              Traçabilité juridique
            </span>
            <p className="text-body-sm text-peach-text">
              Chaque jury enregistré conserve la référence de la version des règles sous laquelle il a été validé.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

