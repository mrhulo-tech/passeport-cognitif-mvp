class TaskResult:
    def __init__(self, user_id, task_type, score, completion_time, feedback):
        self.user_id = user_id
        self.task_type = task_type
        self.score = score
        self.completion_time = completion_time
        self.feedback = feedback
