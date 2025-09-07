# .env and application-level configuration

## Problem

Software moves between environments: your laptop, a shared developer environment, staging and production.

Each environments has different connection strings, port, and secrets. Hardcoding these values introduces a couple problems:

- Security: credentials can leak as a result of hard coding values
- Velocity: small configuration tweaks require code edits, reivews, and deployed

## What's configuration in practice?

Resource handles - database URI, Redis URL, SMTP server
Service credentials - APIs keys, secrets, etc
Runtime settings - port, log level, timeouts

## .env files

Allows us to define key/value pairs within an ".env" file at the root of your codebase.

Never track .env files using git. It should never be pushed got Github

## Secure sharing of .env values within a team

Secrets must be shared, but never via email, chat or commiting the file to git. Alternative options:

- Password managers with share vaults: 1Password, Bitwarden (organization vault), etc allow you to store secrets and share access with the team. 
- Managed secrets sevices: AWS Secrets Manager or Parameter Store; Azure Key Vault; Google Secret Manager