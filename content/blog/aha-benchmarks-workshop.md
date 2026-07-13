---
title: "CHAILD at the MIT Media Lab: designing benchmarks for human flourishing with AI"
description: "We joined 80 experts at the AHA workshop to design benchmarks measuring how AI affects people"
tags: ["impact", "talks"]
date: "2025-10-17"
url: "https://www.media.mit.edu/events/aha-flourishing-workshop/"
---

Most AI benchmarks measure how smart models are — but not how they affect the people using them. Do they deepen our understanding or quietly erode it? This week, Isobel and Vid joined the [Workshop for Designing Benchmarks for Human Flourishing with AI](https://www.media.mit.edu/events/aha-flourishing-workshop/), hosted by the MIT Media Lab's Advancing Humans with AI (AHA) research program in Cambridge, Massachusetts, on 14–15 October, to help address this gap.

The workshop brought together around 80 experts from over 40 organisations: universities including MIT, Harvard, Stanford, Oxford, Cambridge, and the National University of Singapore, alongside tech companies and non-profits such as OpenAI, Google DeepMind, Microsoft, Hugging Face, the Center for Humane Technology, Partnership on AI, and RAND. The meeting ran under the Chatham House Rule, so nothing here is attributed to any person or organisation. The two days were structured as working groups in three parallel tracks: **Comprehension, Reasoning & Agency** (measuring how AI systems improve human understanding while preserving autonomy and decision-making capacity), **Curiosity & Learning** (how AI supports continuous learning, intellectual growth, and curiosity-driven exploration), and **Healthy Social Lives** (how AI affects social connections, community engagement, and relationship quality).

A conversation from the pre-workshop social set the tone for us: is agency about actually being in control, or about the *sense* of control? One study found that people preferred the fine-grained control of moving a mouse cursor even when selecting a button was better aligned with their high-level intent — a question we kept returning to all week.

## Day 1: scenarios and criteria

[photo-placeholder-day1]: /content/blog/images/aha-2025-opening.jpg "TODO: add the day-1 opening presentation photo here, embed with ![The workshop opening presentation at the MIT Media Lab](/content/blog/images/aha-2025-opening.jpg)"

The first day focused on drafting user–chatbot conversation scenarios and defining criteria for what good and bad AI responses look like. We both worked in the Comprehension, Reasoning & Agency track, but split into separate subgroups to cover more ground.

Vid's subgroup focused on the importance of user context: an LLM often cannot know what the appropriate response is without first eliciting the unknown context that shapes it — so a good response starts by asking, not assuming. Isobel's subgroup looked at users retaining *epistemic agency*; the initial results from their very rough benchmark suggest LLMs are very poor at this.

Other ideas that stuck with us: measuring agency by how quickly someone moves from stuck to started on a task just outside their comfort zone (their zone of proximal development); giving users a way to see what a model "knows" or assumes about them, with an option to correct it; and small nudges that steer away from mindless copy-pasting of AI output.

## Day 2: running the benchmark

[photo-placeholder-day2]: /content/blog/images/aha-2025-boston.jpg "TODO: add the day-2 Boston skyline photo here, embed with ![The view over the Charles River and Boston skyline from the MIT Media Lab](/content/blog/images/aha-2025-boston.jpg)"

Overnight, the MIT team reorganised the scenarios and success/failure criteria from day 1 and ran benchmark tests against several LLMs. We spent day 2 digging into the results with the [benchmark tool](https://benchmark.cyborglab.org/) and discussing what's missing.

Some takeaways:

- Benchmarks can measure only a few aspects of what we care about — they need to be supplemented by guidelines and case studies.
- None of us can really say what "human flourishing" is, and doing well on the benchmark does not produce it. Calling it a "human experience of AI" benchmark is more honest.
- Some of the issues we targeted can be addressed at the application level with system prompts — but not all. We couldn't make LLMs hold back ready-made answers and encourage users to think for themselves, and we couldn't get them to ask about missing context instead of making assumptions.
- Cognitive offloading increases short-term agency at the expense of long-term agency.

Two resources shared during the workshop that we found interesting: [Weval](https://weval.org/), an open platform for community-built AI evaluations, and the [Deliberative Reason Index](https://academic.oup.com/book/44646/chapter/378695400), a method for measuring deliberative reasoning in groups that might transfer to LLM conversations.

The organisers are compiling a workshop report — we'll share it here when it's published. Our thanks to the AHA team for a genuinely productive two days, and to the Omidyar Network for supporting the workshop.
