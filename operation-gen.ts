import { buildClientSchema, getIntrospectionQuery, parse, print } from 'graphql';
import { buildOperationNodeForField } from '@graphql-tools/utils';
import axios from 'axios';
import { promises as fs } from 'fs';

const getSchemaFromUrl = async (url: string) => {
    const searchParams = {
        query: getIntrospectionQuery().toString(),
    };

    // console.log(searchParams);

    const response = await axios.post(url, searchParams);

    // const { data } = response.body as any;
    const { data } = response.data as any;
    // console.log(data);
    return buildClientSchema(data);
};

const main = async (schemaUrl: string) => {
    const schema = await getSchemaFromUrl(schemaUrl);
    const operationsDictionary = {
        query: { ...(schema.getQueryType()?.getFields() ?? {}) },
        mutation: { ...(schema.getMutationType()?.getFields() ?? {}) },
        subscription: { ...(schema.getSubscriptionType()?.getFields() ?? {}) },
    };

    let documentString = ``;

    for (const [operationKind, operationValue] of Object.entries(operationsDictionary)) {
        for (const operationName of Object.keys(operationValue)) {
            const operationAST = buildOperationNodeForField({
                schema,
                kind: operationKind as any,
                field: operationName,
            });

            documentString += print(operationAST);
        }
    }

    const res = parse(documentString);
    let body = res.loc.source.body;
    const redundant = ['_mutation', '_query', '_subscription'];
    for (const r of redundant) {
        body = body.replace(new RegExp(r, 'ig'), '');
    }

    fs.writeFile('./src/operation.gql', body)

};

const _ = main("http://localhost:3000/graphql")
