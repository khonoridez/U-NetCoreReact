
++++++++++++++++VS Code Snippets++++++++++++++++
https://code.visualstudio.com/docs/editor/userdefinedsnippets

- Under code base, copy reactivities.code-snippets file to the /solution root/.vscode folder in VsCode
ex. usage
- inside VsCode type prefix S_3.3 and the file will automatically populate with Activity data

++++++++++++++++Create Snippet Sample++++++++++++++++

In VS CODE, Create a new Snippet
- File > Preferences > User Snippets
- Create handlerSnippets

- Copy List.cs and Create.cs to translate to snippet format
https://snippet-generator.app/


{
  "Query Handler": {
    "prefix": "qhandler",
    "body": [
      "public class Query : IRequest<${1:ReturnObject}>",
      "        {",
      "        }",
      "",
      "        public class Handler : IRequestHandler<Query, ${1:ReturnObject}>",
      "        {",
      "            private readonly DataContext _context;",
      "",
      "            public Handler(DataContext context)",
      "            {",
      "                _context = context;",
      "            }",
      "",
      "            public async Task<${1:ReturnObject}> Handle(Query request, CancellationToken cancellationToken)",
      "            {//handler logic here",
      "            }",
      "        }"
    ],
    "description": "Query Handler"
  },
  "Command Handler": {
    "prefix": "chandler",
    "body": [
      "public class Command : IRequest",
      "        {//properties",
      "        }",
      "",
      "        public class Handler : IRequestHandler<Command>",
      "        {",
      "            private readonly DataContext _context;",
      "",
      "            public Handler(DataContext context)",
      "            {",
      "                _context = context;",
      "            }",
      "",
      "            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)",
      "            {",
      "                // handler logic here",
      "                _context.Activities.Add(activity);",
      "                var success = await _context.SaveChangesAsync() > 0;",
      "",
      "                if (success) return Unit.Value;",
      "",
      "                throw new Exception(\"Problem saving changes\");",
      "            }",
      "        }"
    ],
    "description": "Command Handler"
  }
}

++++++++++++++++Postman Collection++++++++++++++++
https://learning.getpostman.com/docs/postman/collections/intro_to_collections/

- Copy Reactivities.postman_collection.json on Postman (File/Import)
