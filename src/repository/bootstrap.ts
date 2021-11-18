import { getRepository } from "typeorm"
import { Task } from "../entity/task"
import { User } from "../entity/User"

export const Bootstrap = async () => {
    const userRepo = getRepository(User)
    const user = userRepo.create({
        name: "sulabh adhikari",
        email: "sulabh@sulabh.com",
        password: "password",

    })
    user.tasks = task
    await userRepo.save(user).catch(err => {
        console.log(err)
    })
    console.log("new user created and saved", user)

    const taskRepo = getRepository(Task)
    const task = taskRepo.create({
        title: "do homework",
        description: "i got almost 10 subject homeworks. i better hurry up",

    })
    task.user = user
    await taskRepo.save(task).catch(err => {
        console.log(err)
    })
    console.log("task created")
}