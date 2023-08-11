import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './test',
  use: {
    baseURL: 'http://localhost:4173',
  },
  webServer: {
    command: 'npm run build-only && npm run preview',
    url: 'http://localhost:4173',
    timeout: 10000,
  },
}
export default config
