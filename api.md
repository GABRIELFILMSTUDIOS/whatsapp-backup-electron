Note: Format of returns not yet determined

A note on IDs: IDs need to be prepended with the ID of the data provider they stem from, thus IDs have the format `[provider_id]:[native_id]`. The returned objects contain their native ID in field `id` and the ID of their provider in field `providerID`.

# /providers
`GET`: Get available data providers

## /providers/:id
`GET`: Get details for data provider with ID `:id`

# /chats
`GET`: Get chat sessions

| param   | explanation                                        | default | required? |
| ------- | -------------------------------------------------- | ------- | --------- |
| `type`  | only get chats of ChatType `type` | `undefined` | no |
| `sort`  | what to sort by, `+` for ascending, `-` descending. Options are `date` and `id` | `date-` | no        |
| `limit` | how many chats to return at most                   | `50`    | no        |
| `page`  | Return entries `(page-1)*limit` to `page*limit`. Mutually exclusive with `from`. If neither `page` nor `from` is set, `page=1` will be assumed. | `undefined` | no        |
| `fromDate`| Start returning message with Date `from`. | `undefined` | no        |

## /chats/:id
`GET`: Get chat session with ID `:id`

## /chats/:id/info
`GET`: Get info for chat session with ID `:id`

## /chat/:id/messages
`GET`: Get messages from chat session with ID `:id`, sorted by date

| param   | explanation                                        | default | required? |
| ------- | -------------------------------------------------- | ------- | --------- |
| `sort`  | `+` for ascending, `-` descending                  | `-`     | no        |
| `limit` | how many messages to return at most                | `50`    | no        |
| `page`  | Return entries `(page-1)*limit` to `page*limit`. Mutually exclusive with option `fromID`.    | `1`     | no        |
| `fromID`| Start returning message with ID `from`. | _not set_ | no        |
| `fromDate`| Start returning message with ID `from`. | _not set_ | no        |

# /messages
## /messages/:id
`GET`: Get details of message with ID `id`

## /messages/:id/receiptinfo
`GET`: Get the receipt info for the message with ID `id`.

## /messages/:id/reactions
`GET`: Get the reactions for the message with ID `id`.

# /media
## /media/:id

# /people
`GET`: Get people

| param   | explanation                                        | default | required? |
| ------- | -------------------------------------------------- | ------- | --------- |
| `sort`  | what to sort by, `+` for ascending, `-` descending. Available columns: `id`, `name`. For WhatsApp Databases, `sort` is also available and is identical to `name`, but possibly faster. | `name+`/`sort+` | no        |
| `limit` | how many chats to return at most                   | `50`    | no        |
| `page`  | Return entries `(page-1)*limit` to `page*limit`    | `1`     | no        |
| `phone`  | Filter by phone number | `undefined` | no |
| `name`  | Filter by name | `undefined` | no |

## /people/:id
`GET`: Get details of person with id `:id`
