const pg = require('pg');

const config = {
    host: 'ec2-44-206-11-200.compute-1.amazonaws.com',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'lausoxixhnrwwi',     
    password: '62bc1c61edc4bf5288c13bc7502fcfd853751e0551caa221fdcf276024f5ac4c',
    database: 'd4b4h4t3it5lun',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
    `;

    client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}