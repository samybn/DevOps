import { Routes, Route, Navigate } from 'react-router-dom';
import { ConnexionPage } from './pages/auth/ConnexionPage';
import { MotDePasseOubliePage } from './pages/auth/MotDePasseOubliePage';
import { ConfirmationResetPage } from './pages/auth/ConfirmationResetPage';
import { AppLayout } from './layouts/AppLayout';
import { DoctorantDashboard } from './pages/doctorant/DoctorantDashboard';
import { DoctorantThese } from './pages/doctorant/DoctorantThese';
import { DoctorantManuscrit } from './pages/doctorant/DoctorantManuscrit';
import { DoctorantJury } from './pages/doctorant/DoctorantJury';
import { DoctorantDecision } from './pages/doctorant/DoctorantDecision';
import { DoctorantAttestation } from './pages/doctorant/DoctorantAttestation';
import { DirecteurDashboard } from './pages/directeur/DirecteurDashboard';
import { DirecteurThese } from './pages/directeur/DirecteurThese';
import { DirecteurJury } from './pages/directeur/DirecteurJury';
import { DepartementValidations } from './pages/departement/DepartementValidations';
import { DepartementValidationDetail } from './pages/departement/DepartementValidationDetail';
import { JuryTheses } from './pages/jury/JuryTheses';
import { JuryLecture } from './pages/jury/JuryLecture';
import { JuryRapport } from './pages/jury/JuryRapport';
import { JurySeance } from './pages/jury/JurySeance';
import { ScolariteDashboard } from './pages/scolarite/ScolariteDashboard';
import { ScolaritePlanification } from './pages/scolarite/ScolaritePlanification';
import { ScolariteConvocations } from './pages/scolarite/ScolariteConvocations';
import { ScolariteDeroulement } from './pages/scolarite/ScolariteDeroulement';
import { ScolariteDecisions } from './pages/scolarite/ScolariteDecisions';
import { ScolariteArchives } from './pages/scolarite/ScolariteArchives';
import { AdminUtilisateurs } from './pages/admin/AdminUtilisateurs';
import { AdminReglesJury } from './pages/admin/AdminReglesJury';
import { AdminSalles } from './pages/admin/AdminSalles';
import { AdminSupervision } from './pages/admin/AdminSupervision';
import { AdminStatistiques } from './pages/admin/AdminStatistiques';
import { AgendaPublic } from './pages/public/AgendaPublic';
import { ProfilPage } from './pages/auth/ProfilPage';

export function App() {
  return (
    <Routes>
      {/* Auth pages (no sidebar) */}
      <Route path="/connexion" element={<ConnexionPage />} />
      <Route path="/mot-de-passe-oublie" element={<MotDePasseOubliePage />} />
      <Route path="/confirmation-reset" element={<ConfirmationResetPage />} />

      {/* Public */}
      <Route path="/agenda" element={<AgendaPublic />} />

      {/* App pages with sidebar */}
      <Route element={<AppLayout role="doctorant" />}>
        <Route path="/doctorant" element={<DoctorantDashboard />} />
        <Route path="/doctorant/these" element={<DoctorantThese />} />
        <Route path="/doctorant/manuscrit" element={<DoctorantManuscrit />} />
        <Route path="/doctorant/jury" element={<DoctorantJury />} />
        <Route path="/doctorant/decision" element={<DoctorantDecision />} />
        <Route path="/doctorant/attestation" element={<DoctorantAttestation />} />
        <Route path="/profil" element={<ProfilPage />} />
      </Route>

      <Route element={<AppLayout role="directeur" />}>
        <Route path="/directeur/doctorants" element={<DirecteurDashboard />} />
        <Route path="/directeur/these/:id" element={<DirecteurThese />} />
        <Route path="/directeur/these/:id/jury" element={<DirecteurJury />} />
      </Route>

      <Route element={<AppLayout role="departement" />}>
        <Route path="/departement/validations" element={<DepartementValidations />} />
        <Route path="/departement/validations/:juryId" element={<DepartementValidationDetail />} />
      </Route>

      <Route element={<AppLayout role="jury" />}>
        <Route path="/jury/theses" element={<JuryTheses />} />
        <Route path="/jury/these/:id/lecture" element={<JuryLecture />} />
        <Route path="/jury/these/:id/rapport" element={<JuryRapport />} />
        <Route path="/jury/these/:id/seance" element={<JurySeance />} />
      </Route>

      <Route element={<AppLayout role="scolarite" />}>
        <Route path="/scolarite" element={<ScolariteDashboard />} />
        <Route path="/scolarite/planification" element={<ScolaritePlanification />} />
        <Route path="/scolarite/convocations" element={<ScolariteConvocations />} />
        <Route path="/scolarite/soutenance/:id/deroulement" element={<ScolariteDeroulement />} />
        <Route path="/scolarite/decisions" element={<ScolariteDecisions />} />
        <Route path="/scolarite/archives" element={<ScolariteArchives />} />
      </Route>

      <Route element={<AppLayout role="admin" />}>
        <Route path="/admin/utilisateurs" element={<AdminUtilisateurs />} />
        <Route path="/admin/regles-jury" element={<AdminReglesJury />} />
        <Route path="/admin/salles" element={<AdminSalles />} />
        <Route path="/admin/supervision" element={<AdminSupervision />} />
        <Route path="/admin/statistiques" element={<AdminStatistiques />} />
      </Route>

      <Route path="/" element={<Navigate to="/connexion" replace />} />
      <Route path="*" element={<Navigate to="/connexion" replace />} />
    </Routes>
  );
}

