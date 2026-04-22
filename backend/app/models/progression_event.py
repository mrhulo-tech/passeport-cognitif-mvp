class ProgressionEvent:
    def __init__(self, user_id, event_type, delta, timestamp):
        self.user_id = user_id
        self.event_type = event_type
        self.delta = delta
        self.timestamp = timestamp
