import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Download, Lock, FileText, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export function JuryLecture() {
  const { id } = useParams();

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to="/jury/theses" className="text-app-text-secondary hover:text-app-text">
          <ArrowLeft size={20} />
        </Link>
        <span className="text-caption text-app-text-secondary">Retour à mes thèses</span>
      </div>

      <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-caption text-app-text-secondary tracking-wide uppercase">
            Consultation sécurisée · Thèse DOC-2023-004{id || '1'}
          </span>
          <h1 className="font-serif text-h1 text-app-text">Lecture du manuscrit</h1>
          <p className="text-body text-app-text-secondary">
            Candidat(e) : Amira Benali · Optimisation des réseaux de capteurs pour la surveillance environnementale
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" icon={<Download size={14} />}>
            Télécharger (Signature 60s)
          </Button>
          <Link to={`/jury/these/${id || '1'}/rapport`}>
            <Button variant="primary" size="sm">
              Rédiger le rapport →
            </Button>
          </Link>
        </div>
      </div>

      {/* Reader area */}
      <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-1">
        {/* Table of contents */}
        <Card className="gap-3 max-lg:col-span-1">
          <span className="text-caption font-semibold uppercase text-app-text-secondary tracking-wide">
            Sommaire du document
          </span>
          <div className="flex flex-col gap-1.5 text-caption w-full">
            {[
              { title: 'Remerciements & Dédicaces', page: 'p. 3' },
              { title: 'Introduction générale', page: 'p. 7' },
              { title: 'Chapitre 1 : État de l’art des WSN', page: 'p. 19' },
              { title: 'Chapitre 2 : Modélisation énergétique', page: 'p. 54' },
              { title: 'Chapitre 3 : Algorithmes distribués', page: 'p. 92' },
              { title: 'Chapitre 4 : Résultats expérimentaux', page: 'p. 138' },
              { title: 'Conclusion et perspectives', page: 'p. 172' },
              { title: 'Références bibliographiques', page: 'p. 178' },
            ].map((c, i) => (
              <button
                key={i}
                type="button"
                className="flex items-center justify-between p-2 rounded-field hover:bg-app-nested text-left transition-colors text-app-text"
              >
                <span className="truncate">{c.title}</span>
                <span className="text-tiny text-app-text-secondary shrink-0">{c.page}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Simulated Document Viewer */}
        <div className="col-span-3 flex flex-col gap-4 max-lg:col-span-1">
          {/* Viewer toolbar */}
          <div className="flex items-center justify-between p-3 bg-app-surface border border-app-border rounded-field">
            <div className="flex items-center gap-2 text-caption text-app-text">
              <BookOpen size={16} className="text-app-action" />
              <span>Page 19 sur 184</span>
            </div>

            <div className="flex items-center gap-2">
              <button type="button" className="p-1 rounded-field hover:bg-app-nested text-app-text">
                <ChevronLeft size={18} />
              </button>
              <span className="text-caption font-medium px-2">Chapitre 1</span>
              <button type="button" className="p-1 rounded-field hover:bg-app-nested text-app-text">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-tiny text-status-soutenu-text">
              <Lock size={12} />
              <span>Accès chiffré certifié</span>
            </div>
          </div>

          {/* Document page preview */}
          <div className="min-h-[600px] p-12 bg-app-surface rounded-card border border-app-border flex flex-col gap-6 shadow-sm">
            <div className="text-center pb-6 border-b border-app-border">
              <span className="text-caption uppercase text-app-text-secondary tracking-widest">
                Chapitre 1
              </span>
              <h2 className="font-serif text-h2 text-app-text mt-1">
                État de l'art des réseaux de capteurs sans fil en milieu contraint
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-body text-app-text leading-relaxed font-serif">
              <p>
                1.1 Introduction au contexte d’observation environnementale
              </p>
              <p className="text-body-sm text-app-text-secondary leading-relaxed font-sans">
                Les réseaux de capteurs sans fil (Wireless Sensor Networks, WSN) constituent aujourd'hui une infrastructure clé pour le suivi en continu de paramètres biophysiques dans les zones arides et semi-arides. Le déploiement à large échelle se heurte toutefois aux limitations intrinsèques en termes d'autonomie énergétique, de portée radiofréquence et de tolérance aux défaillances de nœuds individuels...
              </p>
              <p className="text-body-sm text-app-text-secondary leading-relaxed font-sans">
                L’objectif de cette thèse est de formuler une taxonomie rigoureuse des protocoles de routage hiérarchiques et de proposer une approche hybride combinant agrégation de données in-network et ordonnancement adaptatif de veille.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

