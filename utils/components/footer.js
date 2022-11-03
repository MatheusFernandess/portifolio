import Link from "next/link"
export default function Footer(){
  return (
    <div>
        <ul><li><Link href="/">spotify</Link></li></ul>
        <ul><li><Link href="/">deezer</Link></li></ul>
        <ul><li><Link href="https://youtube.com/@mattheusfernandes">youtube</Link></li></ul> 
        <ul><li><Link href="/contato">Contato</Link></li></ul>  
        <ul><li><Link href="https://www.google.com">loja</Link></li></ul>
      </div>
  )
}