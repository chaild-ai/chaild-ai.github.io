/*
 * CHAILD publications, talks, and reports.
 *
 * This is the single place to edit the Publications page. Each entry:
 *   type    - "paper" | "talk" | "policy" | "report" (controls the section)
 *   year    - publication year (controls ordering within a section)
 *   authors - author list as it should be cited (optional)
 *   title   - work title
 *   venue   - where it appeared (optional)
 *   url     - external link, e.g. a DOI or report page (optional)
 *   post    - slug of a related news post in /public/content/blog (optional).
 *             More than one entry may link to the same post — e.g. both
 *             MPLS talks below link to "mpls-ai-ethics-conf".
 */
export const publications = [
  // Papers and accepted work
  {
    type: "paper",
    year: 2026,
    authors:
      "Isobel Voysey, Vidminas Vizgirda, Sarah Turner, Leslye Denisse Dias Duran, Zaki Pauzi, Manolis Mavrikis, Carina Prunkl, and Jun Zhao",
    title:
      "Agency in Child–AI Interaction: A Review of How It Is Conceptualised, Studied, and Supported in HCI",
    venue:
      "Proceedings of the 25th Annual ACM Interaction Design and Children Conference (IDC '26), 573–587",
    url: "https://doi.org/10.1145/3773077.3806105",
    post: "agency-lit-review"
  },
  {
    type: "paper",
    year: 2026,
    authors:
      "Vidminas Vizgirda, Isobel Voysey, Zaki Pauzi, Najme Babai, Eva Durall Gazulla, Jane Waite, Ayça Atabey, Sarah Turner, Manolis Mavrikis, and Jun Zhao",
    title: "Child-Centred AI-Mediated Collaborative Agency by Design",
    venue:
      "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26), Article 928, 1–5",
    url: "https://doi.org/10.1145/3772363.3778754",
    post: "chaild-at-chi-2026"
  },
  {
    type: "paper",
    year: 2026,
    authors: "Zaki Pauzi and Manolis Mavrikis",
    title:
      "Should Machines Get to Judge? Rethinking the Design of AI-Mediated Assessment in Education",
    venue:
      "Companion Publication of the 2026 ACM Designing Interactive Systems Conference (DIS '26 Companion), 171–175",
    url: "https://doi.org/10.1145/3802974.3809410"
  },
  {
    type: "paper",
    year: 2026,
    authors:
      "Zaki Pauzi, Vidminas Vizgirda, Leslye Denisse Dias Duran, and Manolis Mavrikis",
    title: "Towards Evaluating Student Agency in AI-Mediated Learning",
    venue:
      "Companion Publication of the 2026 ACM Designing Interactive Systems Conference (DIS '26 Companion), 221–225",
    url: "https://doi.org/10.1145/3802974.3809419"
  },
  {
    type: "paper",
    year: 2026,
    authors: "Leslye Denisse Dias Duran and Isobel Voysey",
    title: "Friction as Support for Children's Agency",
    venue:
      "Workshops at the Fourth International Conference on Hybrid Human–Artificial Intelligence (HHAI-WS 2026), Brussels, Belgium"
  },
  {
    type: "paper",
    year: 2025,
    authors: "M. Mavrikis and E. Geraniou",
    title:
      "Crafting AI-supported Exploratory Learning Activities for the Mathematics Classroom"
  },
  {
    type: "paper",
    year: 2025,
    authors: "Z. Pauzi, M. Dodman, and M. Mavrikis",
    title: "Automating Pedagogical Evaluation of LLM-based Conversational Agents"
  },
  {
    type: "paper",
    year: 2025,
    authors: "I. Voysey and J. Zhao",
    title:
      "Defining and supporting children's agency within the context of a datafied childhood"
  },

  // Presentations & talks
  {
    type: "talk",
    year: 2026,
    authors: "Leslye Denisse Dias Duran",
    title: "How Can AI Support Children's Agency?",
    venue: "MPLS Researcher Conference: AI & Ethics, University of Oxford",
    post: "mpls-ai-ethics-conf"
  },
  {
    type: "talk",
    year: 2026,
    authors: "Isobel Voysey",
    title: "Young voices in AI research: Piloting an MPLS-wide youth advisory group",
    venue: "MPLS Researcher Conference: AI & Ethics, University of Oxford",
    post: "mpls-ai-ethics-conf"
  },

  // Policy reports
  {
    type: "policy",
    year: 2026,
    title: "A Rapid Review of AI Literacy Frameworks",
    authors: "Hillman et al.",
    venue: "The Royal Society",
    url: "https://royalsociety.org/-/media/policy/projects/ai-in-education/hillman-et-al-a-rapid-review-of-ai-literacy-frameworks.pdf",
    post: "royal-society-2026"
  },
  {
    type: "policy",
    year: 2026,
    title: "International AI Safety Report",
    url: "https://internationalaisafetyreport.org"
  },
  {
    type: "policy",
    year: 2026,
    title:
      "Joint letter to the UK Prime Minister on the UK social media policy for under-16s"
  },
  {
    type: "policy",
    year: 2025,
    title: "Joint Statement on Artificial Intelligence and the Rights of the Child",
    venue: "Contributed to by the Oxford Child-Centred AI group"
  },
  {
    type: "policy",
    year: 2025,
    title: "UNDP Development Report 2025",
    venue: "United Nations Development Programme"
  },

  // Other reports
  {
    type: "report",
    year: 2026,
    authors:
      "Vidminas Vizgirda, Hawra Rabaan, Jianing Wang, Khadija El Aadmi Laamech, and Christina Detsika",
    title: "Final report from the CAMCAD workshop at CHI 2026",
    venue: "CAMCAD Workshop at CHI 2026, Barcelona, Spain, 16 April 2026",
    url: "https://oxfordhcc.github.io/CAMCAD/report/",
    post: "chaild-at-chi-2026"
  },
  {
    type: "report",
    year: 2026,
    authors:
      "Pattie Maes, Pat Pataranutaporn, Valdemar Danry, Auren Liu, and colleagues (incl. Vidminas Vizgirda and Isobel Voysey)",
    title:
      "Towards Open Benchmarks for Human Flourishing with AI: Report of the October '25 Workshop and Next Steps",
    venue: "MIT Media Lab",
    url: "https://www.media.mit.edu/projects/report-benchmarks-for-human-flourishing-with-ai/overview/"
  }
];

// Section order and headings on the Publications page.
export const publicationSections = [
  { type: "paper", title: "Papers and accepted work" },
  { type: "talk", title: "Presentations & talks" },
  { type: "policy", title: "Policy reports" },
  { type: "report", title: "Other reports" }
];
