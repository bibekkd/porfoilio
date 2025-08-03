export default function LanderPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Lander Page Test</h1>
      <p>If you can see this, the hosting provider is serving content from /lander path.</p>
      <p>Current URL: {typeof window !== 'undefined' ? window.location.href : 'Server-side'}</p>
    </div>
  )
} 