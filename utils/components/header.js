import Link from "next/link"
export default function Header(){
  return (
    <div>
        <ul><li><Link href="/">Home</Link></li></ul>
        <ul><li><Link href="/cifras">Cifras</Link></li></ul>
        <ul><li><Link href="/musicas">Músicas</Link></li></ul> 
        <ul><li><Link href="/contato">Contato</Link></li></ul>  
        <ul><li><Link href="/blog">Blog</Link></li></ul>  
        <ul><li><Link href="https://mattheus-fernandes.lojaintegrada.com.br/">loja</Link></li></ul>
      </div>
  )
}