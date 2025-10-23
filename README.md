# Microsite

This repository contains the source code for the Square microsite.

## Getting Access to Contribute

To contribute to this repository, you need access to the Square GitHub organization. Here's how to get access:

### Step 1: Find Someone with Access
You need to find someone who currently has access to the Square GitHub organization to invite you.

### Step 2: Add Square GitHub Organization
1. Go to [go/oktaaccess](https://go/oktaaccess)
2. Add the Square GitHub organization to your access

### Step 3: Accept the Invitation
1. Visit the [GitHub Organizations page](https://github.com/settings/organizations)
2. Accept the invitation to the Square organization

### Step 4: Configure Authentication
Once you have access, you'll need to configure your authentication:

#### For HTTPS (with Personal Access Token):
- Create a personal access token with appropriate permissions
- Configure git to use the token for authentication

#### For SSH (Recommended):
- Ensure your SSH key is authorized for the Square organization
- The organization uses SAML SSO, so you may need to authorize your SSH key for the organization

### Troubleshooting
If you encounter permission issues:
- Make sure you've completed all the steps above
- Check that your SSH key is authorized for the Square organization's SAML SSO
- Verify you have the correct access rights to the repository

## Development

This is a Jekyll-based site. To run locally:

### Prerequisites
- Ruby 2.7.4 (specified in Gemfile)
- Access to Square's internal gem servers (for bundle install)
- VPN connection may be required

### Setup Steps
1. Ensure you have Ruby 2.7.4 installed (use rvm: `rvm install 2.7.4`)
2. Switch to the correct Ruby version: `rvm use 2.7.4`
3. Install dependencies: `bundle install`
4. Start the development server: `bundle exec jekyll serve`
5. Visit `http://localhost:4000` in your browser

### Troubleshooting
- If you encounter SSL certificate errors, you may need to configure gem sources
- The project uses Square's internal gem servers, so you'll need appropriate access
- If bundle install fails, check your VPN connection and gem source configuration

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Push the branch to the repository
4. Create a pull request to merge your changes
