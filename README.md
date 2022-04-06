<p align="center">
	  <!--
    <img width="200" src="https://img.icons8.com/stickers/200/000000/under-construction.png">
    -->
    <h1 align="center">Optifine Download Link</h1>
</p>

## Description

> **Optifine Download Link** _(optifine-dl-link)_ est une [REST](https://developer.mozilla.org/docs/Glossary/REST) [API](https://developer.mozilla.org/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) qui permet de récupérer un lien de téléchargement valide de Optifine qu'importe la version que vous souhaitez.

## Utilisation

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
	"status": boolean,
	"url": "string",
	"reason": "string"
}
```

| Propriétés | Type                                                                                            | Description                                              |
| ---------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `status`   | [`Boolean`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Indique si la requête est valide et traité avec succès   |
| `url`      | [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | Lien valide d'OptiFine (Seulement si `status` = `true` ) |
| `reason`   | [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | Raison de l'erreur (Seulement si `status` = `false`)     |
