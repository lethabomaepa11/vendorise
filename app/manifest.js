export default function manifest() {
    return {
      name: 'Vendorise',
      short_name: 'Vendorise',
      description: "Your ultimate e-commerce vendor marketplace",
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#880808',
      icons: [
        {
          src: '/icon.ico',
          sizes: '192x192',
          type: 'image/x-icon',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }