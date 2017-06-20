import { TestBed, inject } from '@angular/core/testing';

import { FriendListService } from './friend-list.service';

describe('FriendListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendListService]
    });
  });

  it('should be created', inject([FriendListService], (service: FriendListService) => {
    expect(service).toBeTruthy();
  }));
});
