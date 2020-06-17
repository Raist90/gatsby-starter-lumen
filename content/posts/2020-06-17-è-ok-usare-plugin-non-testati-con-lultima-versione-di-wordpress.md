---
template: post
title: È ok usare plugin non testati con l'ultima versione di WordPress?
slug: usare-plugin-non-testati-wordpress
draft: true
date: 2020-06-17T09:44:02.952Z
description: Visto che spesso mi è stata posta questa domanda ho deciso di
  scrivere un articolo per poter dare una risposta approfondita.
category: Siti web
tags:
  - sito web
  - wordpress
---
Molti clienti mi hanno fatto questa domanda e immagino che almeno una volta te la sia posta anche tu.

Ed è una buona domanda, poiché se da un lato WordPress ci offre la possibilità di installare un plugin non ancora testato con l'ultima versione del software, dall'altro sappiamo che non è una buona pratica installare del software obsoleto.

***

## Tutte le mezze verità che ti dicono

In giro sul web ci sono parecchie persone che "giocherellano" con WordPress e che si spacciano per guru che ti risponderanno:

* Non dovresti mai installare un plugin non testato con l'ultima versione di WordPress, o ti esploderà il sito.

* Se installi un plugin non aggiornato ti hackerano il sito.

* Scrivi sul forum di supporto del plugin al team di sviluppo per chiedergli se e quando rilasceranno una versione più aggiornata del software.

Queste sono tutte mezze verità nel senso che il guru di turno non è in grado di determinare con esattezza se il plugin è sicuro oppure no e che, per pigrizia, te lo sconsiglia e basta onde evitare rogne.

***

## Il modo più veloce e alla portata di tutti per capire se è ok usare un plugin non aggiornato

Prima di andare avanti, prendi una delle dovute precauzioni:

* all in one e xampp;
* ftp;

Ecco la soluzione pratica e veloce:

1. Installa il plugin "All in One WP Migration" e salva sul tuo pc un backup del sito.

2. Installa il plugin obsoleto, attivalo e controlla che funzioni o meno.

3. Se è andato tutto liscio, chiudi questa guida. Se il plugin ti ha fatto esplodere il sito, collegati via FTP e cancella la cartella del plugin (approfondisci. Continui ad avere problemi? Piazza su un backup e cerca un altro plugin con le stesse funzioni. Hai preferito testare il plugin in locale su XAMPP? Se ha funzionato, installa il plugin anche su dominio, se non ha funzionato cerca un altro plugin con le stesse funzioni.

## Conclusioni

Spesso installiamo plugin che contengono 10 righe di codice PHP. Mi è capitato di utilizzare un plugin così piccolo che non è mai stato aggiornato per anni e che non ha mai smesso di funzionare.

Ovviamente ti sconsiglio in generale di utilizzare plugin per qualsiasi cosa. Valuta prima attentamente se il tuo sito ha realmente bisogno di quella funzione o se è puramente estetica o poco rilevante. 

**Bonus**: consulta questa lista dei plugin che utilizzo di più, ti assicuro che non avrai problemi ad utilizzarli. Magari uno di questi presenti nella lista svolge la stessa funzione di uno di quelli obsoleti che volevi installare.