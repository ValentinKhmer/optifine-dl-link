<p align="center">
	  <!--
    <img width="200" src="https://img.icons8.com/stickers/200/000000/under-construction.png">
    -->
    <h1 align="center">Optifine Download Link</h1>
</p>
<p align="center">
	<a title="Vercel" href= "https://vercel.com/"><img src="https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel" alt="Windows"></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Node.js-333333?logo=node.js&logoColor=339933&style=for-the-badge" alt="Node.js"></a>
	<br>
	<a href="https://github.com/ValentinKhmer/optifine-dl-link/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/ValentinKhmer/optifine-dl-link?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAACfklEQVRIia2U2YuOYRiHr2%2BMsQ0RsiVLDpyQQweWOdEoZUlCkyUHFMWBE2fiL3Cg7GMpSmoi0iiyFImSE4e2UmhsMZJlXA7e%2B9Pj8X7fYPzq633u330%2F7%2FUs73fDX0hdpu79mzlVNWYvqgBLgZnA06x2LLALaFKHAlez%2FFCgCThRqVS6elvxbvuuZ2q%2FujsC5iTj%2FcDpGI8CzmS1h4GTMW4Gzsd4fOzuXT1Qely3K5XKtdjp9JIDeJXkG4D3wDCgG%2FiQFzdUB3E%2FLcAToAdYlNR1AXeT%2BCNwM4nnBeRh7GZuTRAwG5gMHAGuA4vU5iQ%2FIxkPASYm8SpAYH08V%2Bagn1L3xGVOVzfGeFWSX61%2BDf%2BU2j%2F8RvWlejPiW2pXNZ9DGuJruRfxKPWL2pHVHVfNvIUB3xrxtohby0AtkdyReJ3qJ3VY4h0rAR1Ve9QJEY%2BLuL0MtC9A0xJvQ3httUBqk%2FpGvZ6974b6Vh2QmtUzvpMVD1c%2Fq%2BfqgJbEYjZnc7eEvzg1W8PcXrLTCwEbUQN0Sv2mjsnmjY4P52Rqtqvf1UkloDWxiLU5SB2sflAv5%2FMif0XtVodA0RlWAI%2BB1uyeAQYB34BNwIkst4ai9bxQN5awnlP839qAg43AYGAqcKBsZaEJJd7oeLbFr5ZGQtEZHtUpqqqzxDtE0QXqSYpOA%2Br8uKNa6lYHRm3%2BMZyNmnx%2BNe74FavrLDpBrlcmnTsHhXepxgIvlu9Rm9Wd6nm1Q11XUvMbKPxZ6mH1Yjxn9nKk9VUL9Cdq6L3kF1X%2BBfLHUqfEcfbE%2BT9Ql%2F9vyHj1eXbRVWDfYRYtplN9XeOr0qKf3VcX9AV0rA4g17ve3vcDoj5UHHfIGa8AAAAASUVORK5CYII%3D&style=for-the-badge"></a>
</p>

## Description

> **Optifine Download Link** _(optifine-dl-link)_ est une [REST](https://developer.mozilla.org/docs/Glossary/REST) [API](https://developer.mozilla.org/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) qui permet de récupérer un lien de téléchargement valide de Optifine qu'importe la version que vous souhaitez.

## Utilisation

**Base URL : `optifine-dl-link.vercel.app/api`**

```http
GET /api?mc=[string]&of=[string]
```

| Parameter | Type                                                                                          | Description       |
| --------- | --------------------------------------------------------------------------------------------- | ----------------- |
| `mc`      | [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | Minecraft Version |
| `of`      | [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | OptiFine Version  |

### Exemples

Pour **OptiFine 1.18.8 HD U H3** :

```http
GET /api?mc=1.18.8&of=H3
```

## Responses

```json
{
	"status": true,
	"url": "string",
	"reason": "string"
}
```

| Propriétés | Type                                                                                            | Description                                              |
| ---------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `status`   | [`Boolean`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Indique si la requête est valide et traité avec succès   |
| `url`      | [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | Lien valide d'OptiFine (Seulement si `status` = `true` ) |
| `reason`   | [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | Raison de l'erreur (Seulement si `status` = `false`)     |
