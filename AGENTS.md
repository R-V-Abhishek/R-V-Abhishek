# Agent instructions

Read this file before editing. It applies to the entire repository. Keep shared guidance here; `CLAUDE.md` imports this file.

## Purpose and scope

- This is the special public profile repository **R-V-Abhishek/R-V-Abhishek**. GitHub displays its root `README.md` on the user’s profile. Publishing changes to the default branch changes that public introduction.
- The portfolio website is a separate repository, **R-V-Abhishek/Portfolio-Website**, live at `https://r-v-abhishek.github.io/Portfolio-Website/`. This repository showcases and links to that website; it does not host its application code.
- Start with `git status --short --branch`, `README.md`, and the relevant files. Preserve unrelated changes. Work inside this repository rather than staging the surrounding Resume workspace or a sibling checkout.
- Inspect actual source, output, and current GitHub state before making assumptions. Use narrow `rg` searches and the smallest coherent change. Do work you can access yourself instead of asking the user to inspect files or run commands.
- User shorthand: `ga` = execute; `pbp` = read-only discovery, concrete plan, then wait for approval before implementation; `bb` = be brief; `mon` = periodically check until a process finishes. Continue session-wide `q1`, `q2` question and `f1`, `f2` follow-up numbering.

## Files and implementation

- `README.md`: the public introduction, portfolio banner/link, selected project summaries, toolkit, music, and contact links. Keep it concise and useful to human visitors; do not add agent implementation notes to the public profile copy.
- `assets/portfolio-light.svg` and `assets/portfolio-dark.svg`: the clickable, theme-aware portfolio showcase. Keep both variants and meaningful image alt text.
- `scripts/generate-banner.mjs`: the source for both banners. Edit this script, then run `node scripts/generate-banner.mjs`; do not hand-edit generated SVGs alone.
- `resume.json`: an existing legacy file; inspect it before relying on it. It may be empty and is not an authoritative structured resume. Do not populate it with guessed data or overwrite it during unrelated work.
- This is a Markdown/SVG repository with a Node standard-library generator. There is no application build or package manifest. Do not add a framework, package manager, dependency stack, backend, or CI infrastructure for a simple profile edit.

## Content and appearance

- Preserve the identity **Patterns, signals, and systems.** and its emphasis on machine learning, music, and useful software. Maintain current, verified role/education facts rather than stale “aspiring” titles or automatically incremented student-year claims.
- Use user-confirmed facts, inspected project READMEs, and the portfolio’s shared content as evidence. Verify changes to roles, links, technologies, dates, metrics, awards, and credentials; do not invent or overstate them.
- Keep Amagi content general and public-safe. Do not include proprietary details, internal assets, confidential identifiers, or unsupported deployment/performance claims.
- SwaraSync may be described using confirmed facts and linked to its portfolio narrative. Do not invent a public repository URL. Mark CA Study Companion’s incomplete work accurately.
- Retain the small Carnatic music section and verified concert/finalist details unless the task changes them. Preserve normal email, LinkedIn, resume, and portfolio navigation links.
- Use GitHub-supported Markdown and sanitized HTML. The profile cannot redirect visitors automatically or embed the live website using scripts/iframes. A linked banner is the intentional design.
- Keep SVGs self-contained: no external fonts, scripts, tracking, runtime image services, or mandatory animation. Maintain readable light/dark colors, image proportions, and fallbacks. Avoid restoring a badge wall, external stats/streak panels, fake counters, or “coming soon” destinations.
- Account sidebar fields, pins, and repository descriptions live in GitHub settings/API state, not in this README. Change them only when included in the task. Inspect current state and verify the result; do not silently expand a README edit into account-wide changes.
- The last curated pin order was Expense Logger, NIDS, ArtFolio, CA Study Companion, SaffronSpice, and Portfolio Website. Treat this as context, not permission to overwrite later user choices; re-read the current pins before editing them.

## Verification

- For instruction/documentation-only changes, check referenced files/commands and `git diff --check`; do not create an unnecessary test suite.
- For banner changes, run `node scripts/generate-banner.mjs`, render and inspect **both** SVG themes, and confirm regeneration is deterministic. Use existing local tooling when available without adding a package solely for QA.
- For README changes, check relative assets and destinations. Use GitHub’s Markdown rendering API or a branch preview to verify supported markup, links, themed picture sources, alt text, and project-table readability. Be aware that rendered HTML can contain additional attributes/wrappers.
- After authorized publication, verify the live profile, image loading, and the clickable portfolio destination. GitHub may briefly show cached content; distinguish a delayed refresh from a failed update.
- Report actual verification and limits. A successful commit/push alone does not prove the public profile rendered correctly.

## Git workflow

- Prefer a `codex/` feature branch, a focused Conventional Commit such as `docs: ...`, and a PR. Inspect existing branches/PRs before creating duplicates; review the diff and stage only task files.
- Push, merge, and publish according to the current request’s authorization. Do not assume an earlier unrelated merge instruction authorizes future merges or changes to other repositories.
- Preserve the existing personal GitHub transport if it works. When multiple accounts exist, verify the intended identity and use existing authenticated access. Do not rewrite global SSH/credential settings, expose secrets, or broaden OAuth scopes merely for convenience.
- Keep these instructions synchronized with actual files, workflows, and explicit user decisions. Other tools may need configuration to load them; these files guide agents rather than technically preventing edits.
