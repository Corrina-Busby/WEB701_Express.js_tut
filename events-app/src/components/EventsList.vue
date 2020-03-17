<template>
  <div class="events container">
    <h2 class="subtitle is-3">
    Check out our upcoming auctions
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from '@/components/EventCard';
export default {
  name: 'EventsList',
  components : {
    EventCard
  },
  data () {
    return {
      event: {},
      events: [
        {
          id: 1,
          name: 'Cheese Ball',
          category: 'Fundraising',
          description: 'Spend an elegant night of dinner and auctioning with us as we raise money for our new rescue farm.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: '1234 Bullpower Auction',
          date: '12-25-2019',
          time: '11:30'
        },
        {
          id: 2,
          name: 'Drive through Cheese',
          category: 'Smelly Cheese',
          description: 'Come to our donation drive to help us replenish our stock of Aromatic Cheese, Artisian, Viking Cheese, etc. We will have all the goodness you can think of, brie, blue barbarians, and much more.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500'
          ],
          location: '1234 Bullpower Auction',
          date: '11-21-2019',
          time: '12:00'
        }
      ]
    }  
  }
}
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>