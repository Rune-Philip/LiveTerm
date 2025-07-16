// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Her er alle kommandoer:
\n${c}\n
[tab]: autoudfyld kommando.
[ctrl+l]/clear: ryd terminalen.

Skriv 'sumfetch' for at vise en kort opsummering.`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Åbner Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hej, jeg hedder ${config.name}. 
Velkommen til min hjemmeside!
Mere om mig:
'sumfetch' - kort opsummering.
'resume' - mit nyeste CV.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`, '_blank');
  return 'Åbner CV i en ny fane...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Tak for din interesse! 
Her er måder, du kan støtte mig på:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Åbner mail: ${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Åbner github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Åbner LinkedIn...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Søger på Google efter ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Søger på DuckDuckGo efter ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Virkelig??? Du bruger Bing til at søge efter ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Søger på Reddit efter ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `en
en
hel
masse
falske
mapper`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `desværre har jeg ikke råd til flere mapper.
hvis du vil hjælpe, så skriv 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `wow, du bruger stadig 'vi'? har du hørt om 'vim'?.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' er så gammeldags. hvad med 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'?  fancy. hvorfor ikke 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `....? bare brug vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Adgang nægtet`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
    ____                           ____    _                __
   / __ \__  ______  ___          / __ )  (_)___  ___  ____/ /
  / /_/ / / / / __ \/ _ \        / __  | / / __ \/ _ \/ __  / 
 / _, _/ /_/ / / / /  __/  _    / /_/ / / / /_/ /  __/ /_/ /  
/_/ |_|\__,_/_/ /_/\___/  (_)  /_____/_/ /\____/\___/\__,_/   
                                    /___/                     
Skriv 'help' for at se en liste over tilgængelige kommandoer.
Skriv 'sumfetch' for at vise en opsummering.
Skriv 'repo' eller klik <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">her</a></u> for at åbne Github repository.
`;
};
