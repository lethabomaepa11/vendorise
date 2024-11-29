export default function manifest() {
    return {
      name: 'Vendorise',
      short_name: 'Vendorise',
      description: "Your ultimate e-commerce vendor marketplace",
      start_url: '/',
      display: 'standalone',
      background_color: '#004c4c',
      theme_color: '#004c4c',
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