import { supabase } from './lib/supabase'

export default async function Home() {
  const { data, error } = await supabase.from('productos').select('*')
  
  return (
    <main>
      <h1>Conexión con Supabase</h1>
      {error ? (
        <p style={{color:'red'}}>Error: {error.message}</p>
      ) : (
        <p style={{color:'green'}}>✓ Conectado. Productos en BD: {data?.length ?? 0}</p>
      )}
    </main>
  )
}