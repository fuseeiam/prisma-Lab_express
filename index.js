const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () => {
    console.log('RUN');
    try {
        // CREATE 

        // const result = await prisma.user.createMany({
        //     data: [
        //         {
        //             username: 'John',
        //             password: '123456',
        //             email: 'John@gmail.com',
        //             gender: 'MALE'
        //         },
        //         {
        //             username: 'Jane',
        //             password: '121212',
        //             email: 'Jane@gmail.com',
        //             gender: 'FEMALE'
        //         },
        //         {
        //             username: 'Joe',
        //             password: '124512',
        //             email: 'Joe@gmail.com',
        //             gender: 'FEMALE'
        //         }
        //     ]
        // });

        const result = await prisma.todos.createMany({
            data: [
                {
                    title: 'Play game',
                    completed: true,
                    due_date: new Date('2023-09-12'),
                    userId: 1
                },
                {
                    title: 'Watch NetFlix',
                    completed: true,
                    due_date: new Date('2023-09-13'),
                    userId: 1
                },
                {
                    title: 'Sleep',
                    completed: true,
                    due_date: new Date('2023-09-22'),
                    userId: 2
                }

            ]
        });

        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

run();
