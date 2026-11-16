import type { Lang } from "../i18n";

export const SITE_URL = "https://pablodevportfolio.netlify.app";

export const LINKS = {
  github: "https://github.com/PJMonticoli",
  linkedin:
    "https://www.linkedin.com/in/pablo-javier-mont%C3%ADcoli-b69733248/",
  email: "mailto:pablomonticoli@hotmail.com",
};

export const CV_FILES: Record<Lang, string> = {
  en: "/Pablo_Monticoli_Resume_EN.pdf",
  es: "/Pablo_Monticoli_CV_ES.pdf",
};

export const COMPANY_SITES: Record<string, string> = {
  "allata-lead": "https://www.allata.com/",
  "allata-senior": "https://www.allata.com/",
  hotaka: "https://www.hotaka.io/",
  guma: "https://joseguma.com/",
};

// Verification links by certificate id (see certs.groups and certs.education
// in the i18n files). An id with no entry here renders without a link.
export const CERT_LINKS: Record<string, string> = {
  "claude-101": "https://verify.skilljar.com/c/zempnhhhvet8",
  "mcp-intro": "https://verify.skilljar.com/c/6pds6k4qzkjc",
  "mcp-advanced": "https://verify.skilljar.com/c/inm7fxe2xnud",
  "agent-skills": "https://verify.skilljar.com/c/5gnyh5sy9gy4",
  "claude-cowork": "https://verify.skilljar.com/c/mphgvxjsgsaf",
  "udemy-langgraph":
    "https://www.udemy.com/certificate/UC-c76d5522-a00b-450b-895e-0e1d72711806/",
  "udemy-rag-agents":
    "https://www.udemy.com/certificate/UC-2d34f5f6-ff4c-45c7-b058-f4e688094c0c/",
  "udemy-n8n":
    "https://www.udemy.com/certificate/UC-f35bcc23-2665-471c-8ef6-707b6a577f74/",
  "udemy-azure-openai":
    "https://www.udemy.com/certificate/UC-72d22733-7567-4660-bb27-1e0373ecad9b/",
  "udemy-llms":
    "https://www.udemy.com/certificate/UC-f170fa88-c1f0-4487-9b3a-dff35c2789d3/",
  "udemy-vector-db":
    "https://www.udemy.com/certificate/UC-f6e68b0a-033b-400c-966c-f31b639d9baf/",
  "jupi-bootcamp":
    "https://go.jupidigital.com/certificado/pablo-javier-monticoli",
};
