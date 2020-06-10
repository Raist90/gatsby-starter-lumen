---
template: post
title: Come fa il mio blog ad essere così veloce
slug: come-fa-il-mio-blog-ad-essere-veloce
draft: false
date: 2020-06-09T15:23:39.978Z
description: Probabilmente avrai notato che il mio blog è davvero molto veloce e
  ci mette pochissimi secondi a caricare pagine ed articoli.
category: Siti web
tags:
  - jamstack
  - sito web
  - gatsby
  - netlify cms
  - cms
---
Se non hai ancora consultato la mia guida "Perché devi migliorare la velocità del tuo sito" ti invito a farlo subito, per poter meglio apprezzare questo articolo.

Probabilmente avrai notato che il mio blog è davvero molto veloce e ci mette pochissimi secondi a caricare pagine ed articoli.

![Immagine sul blogging](/media/pablo-blogging.png)

Se sei uno smanettone compulsivo, avrai scoperto che questo blog non è stato sviluppato in WordPress; in effetti esso è frutto di un ventaglio di tecnologie che compongono l'ambiente di sviluppo JAMstack. 

Ma andiamo per gradi.

## Che cos'è JAMstack?

Jamstack non è il nome di un software (come WordPress, Joomla o Drupal). Si tratta di un nuovo modo di sviluppare siti web e app per migliorarne la performance, la sicurezza, abbattere i costi di sviluppo e che, soprattutto, offre allo sviluppatore un'esperienza meno traumatica.

Si tratta di pre-renderizzare siti web con Javascript sfruttando le potenzialità offerte dalle API dei browser.

## Differenze tra JAMstack e CMS

**I CMS tradizionali** come WordPress, Joomla, Drupal e tutti gli altri ti offrono la possibilità di creare contenuti e personalizzare i tuoi siti attraverso temi, plugin e codice PHP o Javascript.

Tutte le modifiche che apporti vengono immagazzinate in un database che, su richiesta dell'utente attraverso la navigazione del sito, le processa e le "serve". Tale procedimento è detto *generazione dinamica*.

Per poter funzionare, il CMS ha bisogno per forza di uno spazio hosting che includa al suo interno almeno un database.

**I framework JAMstack** come Next, Nuxt, Gatsby e Jekyll pre-renderizzano tutti i contenuti del sito: quando l'utente atterra su una pagina i file sono già compilati e vengono forniti al browser via CDN.

Questo comporta enormi vantaggi in termini di performance e reattività perché elimina i tempi di attesa di elaborazione e processazione dei database.

Operando via CDN, un sito web realizzato con JAMstack non ha neanche bisogno di hosting.

Non ti nascondo che per un sito piccolino come il mio blog è un enorme vantaggio in termini economici non dipendere da un hosting.

## Ecco come ho sviluppato il mio blog

Per la realizzazione di questo blog ho sfruttato un generatore statico di siti web chiamato Gatsby e, per non rinunciare ad un editor di testo, gli ho abbinato Netlify CMS.

Nei prossimi giorni pubblicherò un articolo più approfondito su questi strumenti, per oggi è tutto.

Spero che con ciò ti sarà chiaro come mai il mio blog è così veloce. Attenzione però, **non ti sto dicendo di sviluppare tutti i tuoi siti con JAMstack**. 

*La tecnologia perfetta per qualsiasi progetto web non esiste* (o almeno non ancora). 

Ti invito a tornare su queste pagine perché sto scrivendo una guida su come scegliere la tecnologia più adatta al tuo sito.